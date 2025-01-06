(function() {
    if (document.querySelector('#UI')) return;

    const style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

        #UI {
            position: fixed;
            top: 20px;
            left: 20px;
            width: 1000px;
            height: 500px;
            background-color: rgba(0, 0, 0, 0.9);
            font-family: 'Comfortaa', sans-serif;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            border: 5px solid gold;
            transition: opacity 0.3s ease, transform 0.3s ease, height 0.3s ease;
        }

        #UI.hidden {
            opacity: 0;
            transform: scale(0.8);
        }

        #UITopBar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: rgba(20, 20, 20, 1);
            padding: 10px;
            color: white;
            transition: padding 0.3s ease;
        }

        #UITopBar.shrunk {
            padding: 5px;
        }

        #UITopBar button {
            background: none;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        #UITopBar button:hover {
            color: gold;
        }

        #UISearch {
            padding: 10px;
            background-color: rgba(30, 30, 30, 1);
        }

        #UISearch input {
            width: 100%;
            padding: 8px;
            font-size: 14px;
            border: none;
            border-radius: 5px;
            outline: none;
            background-color: rgba(50, 50, 50, 1);
            color: white;
        }

        #UISidebar {
            padding: 10px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 200px;
            height: 100%;
            border-radius: 10px;
        }

        #UISidebar button {
            background: rgba(70, 70, 70, 1);
            color: white;
            border: none;
            border-radius: 5px;
            padding: 15px;
            text-align: left;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
        }

        #UISidebar button:hover {
            background-color: gold;
            color: black;
        }

        #FunctionFrame {
            background-color: rgba(20, 20, 20, 1);
            padding: 15px;
            color: white;
            font-size: 16px;
            overflow-y: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            height: 80%;
            border-radius: 10px;
            border: none;
        }

        #UISidebar {
            max-height: 80%;
        }

        #UISidebar::-webkit-scrollbar {
            width: 8px;
        }

        #UISidebar::-webkit-scrollbar-thumb {
            background: rgba(70, 70, 70, 0.8);
            border-radius: 10px;
        }

        #UISidebar::-webkit-scrollbar-thumb:hover {
            background: rgba(70, 70, 70, 1);
        }
    `;
    document.head.appendChild(style);

    const ui = document.createElement('div');
    ui.id = 'UI';
    ui.innerHTML = `
        <div id="UITopBar">
            <span>US4 UI</span>
            <div>
                <button id="moveUI"><i class="fa fa-arrows"></i></button>
                <button id="shrinkUI"><i class="fa fa-minus"></i></button>
                <button id="closeUI"><i class="fa fa-times"></i></button>
            </div>
        </div>
        <div id="UISearch">
            <input type="text" id="searchInput" placeholder="Search...">
        </div>
        <div style="display: flex; width: 100%;"> 
            <div id="UISidebar">
                <button id="button1"><i class="fa-solid fa-robot"></i> US4 AI</button>
                <button id="button2"><i class="fa fa-question"></i> Placeholder 2</button>
                <button id="button3"><i class="fa fa-question"></i> Placeholder 3</button>
                <button id="button4"><i class="fa fa-question"></i> Placeholder 4</button>
                <button id="button5"><i class="fa fa-question"></i> Placeholder 5</button>
                <button id="button6"><i class="fa fa-question"></i> Placeholder 6</button>
                <button id="button7"><i class="fa fa-question"></i> Placeholder 7</button>
            </div>
            <div id="FunctionFrame">
                <span>Select a button to see its function</span>
            </div>
        </div>
    `;
    document.body.appendChild(ui);

    const closeBtn = document.getElementById('closeUI');
    const shrinkBtn = document.getElementById('shrinkUI');
    const moveBtn = document.getElementById('moveUI');
    const searchInput = document.getElementById('searchInput');
    const sidebar = document.getElementById('UISidebar');
    const topBar = document.getElementById('UITopBar');
    const functionFrame = document.getElementById('FunctionFrame');

    closeBtn.onclick = () => {
        ui.classList.add('hidden');
        setTimeout(() => ui.remove(), 300);
    };

    shrinkBtn.onclick = () => {
        const search = document.getElementById('UISearch');
        search.classList.toggle('hidden');
        sidebar.classList.toggle('hidden');
        ui.style.height = sidebar.classList.contains('hidden') ? '50px' : '500px';
        topBar.classList.toggle('shrunk');
    };

    let isMoving = false, offsetX, offsetY;

    moveBtn.onmousedown = (e) => {
        isMoving = true;
        const rect = ui.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        ui.style.transition = 'none';
    };

    document.onmousemove = (e) => {
        if (!isMoving) return;
        ui.style.left = `${e.clientX - offsetX}px`;
        ui.style.top = `${e.clientY - offsetY}px`;
    };

    document.onmouseup = () => {
        isMoving = false;
        ui.style.transition = '';
    };

    searchInput.oninput = (e) => {
        const filter = e.target.value.toLowerCase();
        const buttons = sidebar.querySelectorAll('button');
        buttons.forEach(button => {
            const text = button.textContent.toLowerCase();
            button.style.display = text.includes(filter) ? '' : 'none';
        });
    };

    const buttons = document.querySelectorAll('#UISidebar button');
    buttons.forEach(button => {
        button.onclick = () => {
            const buttonId = button.id;
            switch (buttonId) {
                case 'button1':
                    functionFrame.innerHTML = `<span><!DOCTYPE html>
<html lang="en">
<head>
    <title>US4 - AI</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #1a1a1a;
            color: gold;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100vh;
        }

        h1 {
            text-align: center;
            color: gold;
            margin-top: 20px;
        }

        #chat-container {
            border: 2px solid #444;
            height: 250px;
            width: 90%;
            max-width: 600px;
            padding: 20px;
            margin-top: 5px;
            margin-bottom: 20px;
            border-radius: 10px;
            background-color: #222;
            color: gold;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
            overflow-y: auto;
        }

        #input-container {
            display: flex;
            align-items: center;
            width: 90%;
            max-width: 600px;
            margin-bottom: 20px;
        }

        #user-input {
            flex-grow: 1;
            padding: 15px;
            font-size: 16px;
            border-radius: 10px;
            background-color: #333;
            color: gold;
            border: 1px solid gold;
            margin-right: 10px;
            resize: none;
            min-height: 30px;
            transition: background-color 0.3s ease;
        }

        #user-input:focus {
            background-color: #444;
            outline: none;
        }

        #send-button {
            width: 35px;
            height: 35px;
            background-color: #333;
            color: gold;
            border-radius: 50%;
            border: 1px solid gold;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        #send-button::before {
            content: '↑';
            font-size: 20px;
            font-weight: bold;
        }

        #send-button:hover {
            background-color: #444;
            transform: scale(1.1);
        }

        #send-button:active {
            background-color: #555;
        }

        img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }

        .message {
            padding: 10px;
            margin: 5px 0;
            border-radius: 5px;
        }

        .message.user {
            text-align: right;
        }

        .message.bot {
            text-align: left;
        }
    </style>
</head>
<body>
    <div id="chat-container">
        <div class="message bot"><img src="https://voucan-us4.github.io/ai/logo.png" alt="AI Logo">Hello. How are you doing today?</div>
    </div>
    
    <div id="input-container">
        <textarea id="user-input" placeholder="Type your message here..."></textarea>
        <button id="send-button"></button>
    </div>

    <script>
        document.getElementById('send-button').addEventListener('click', function() {
            const userInput = document.getElementById('user-input').value.trim();
            if (userInput) {
                const newMessage = document.createElement('div');
                newMessage.classList.add('message', 'user');
                newMessage.textContent = userInput;

                document.getElementById('chat-container').appendChild(newMessage);
                document.getElementById('user-input').value = '';
                document.getElementById('chat-container').scrollTop = document.getElementById('chat-container').scrollHeight;
            }
        });
    </script>
    <script src="https://voucan-us4.github.io/ai/ai.js"></script>
</body>
</html></span>`;
                    break;
                case 'button2':
                    functionFrame.innerHTML = `<span>Function for Placeholder 2</span>`;
                    break;
                case 'button3':
                    functionFrame.innerHTML = `<span>Function for Placeholder 3</span>`;
                    break;
                case 'button4':
                    functionFrame.innerHTML = `<span>Function for Placeholder 4</span>`;
                    break;
                case 'button5':
                    functionFrame.innerHTML = `<span>Function for Placeholder 5</span>`;
                    break;
                case 'button6':
                    functionFrame.innerHTML = `<span>Function for Placeholder 6</span>`;
                    break;
                case 'button7':
                    functionFrame.innerHTML = `<span>Function for Placeholder 7</span>`;
                    break;
            }
        };
    });
})();
