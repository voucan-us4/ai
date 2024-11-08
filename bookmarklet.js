(function() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);

    var button = document.createElement('button');
    button.style.position = 'fixed';
    button.style.bottom = '100px';
    button.style.right = '20px';
    button.style.width = '60px';
    button.style.height = '60px';
    button.style.background = 'gray';
    button.style.borderRadius = '50%';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.zIndex = '9999';
    button.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.3)';
    button.style.transition = 'width 0.3s, height 0.3s, background-color 0.3s';

    var robotIcon = document.createElement('span');
    robotIcon.classList.add('fa-solid', 'fa-robot');
    robotIcon.style.fontSize = '30px';
    robotIcon.style.color = 'white';
    robotIcon.style.transition = 'transform 0.3s';

    button.appendChild(robotIcon);
    document.body.appendChild(button);

    var iframe = document.createElement('iframe');
    iframe.srcdoc = `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <title>US4 - Ai</title>
        <style>
            body {
                font-family: Arial, Helvetica, sans-serif;
                color: gold;
                background-color: black;
            }
            #chat-container {
                border: 1.7px solid black;
                height: 400px;
                overflow-y: auto;
                padding: 10px;
                margin-bottom: 10px;
                border-radius: 5px;
                background-color: black;
                color: gold;
            }
            #input-container {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
            }
            #user-input {
                flex-grow: 1;
                padding: 10px;
                border-radius: 5px;
                background-color: black;
                color: gold;
                border: 1px solid gold;
                margin-right: 10px;
            }
            #send-button {
                width: 40px;
                height: 40px;
                background-color: black;
                color: gold;
                border-radius: 50%;
                border: 1px solid gold;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #send-button::before {
                content: '↑';
                font-size: 18px;
            }
            h1 {
                text-align: center;
                color: gold;
            }
        </style>
    </head>
    <body>
        <h1>Bookmarklet AI</h1>
        <div id='chat-container'>
            <img src='https://us4-ubg.github.io/ai/logo.png' alt='AI Logo' style='width:30px;height:30px;'>
            Hello! I am an AI made with groq. The developer of this bookmarklet was Unblocked Sites 4 or US4 (https://us4-ubg.github.io)
        </div>
        <div id='input-container'>
            <textarea id='user-input' placeholder='Type your message here...'></textarea>
            <button id='send-button'></button>
        </div>
        <script src='https://us4-ubg.github.io/ai/ai.js'></script>
    </body>
    </html>`;

    iframe.style.position = 'fixed';
    iframe.style.bottom = '100px';
    iframe.style.right = '20px';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '2px solid #000';
    iframe.style.background = '#fff';
    iframe.style.borderRadius = '8px';
    iframe.style.visibility = 'hidden';
    iframe.style.opacity = '0';
    iframe.style.zIndex = '9999';
    iframe.style.overflowY = 'auto';
    iframe.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.4)';
    iframe.style.transition = 'all 0.4s ease';

    document.body.appendChild(iframe);

    button.addEventListener('click', function() {
        var isOpen = iframe.style.width === '450px';

        if (!isOpen) {
            iframe.style.visibility = 'visible';
            iframe.style.opacity = '1';
            iframe.style.width = '450px';
            iframe.style.height = '500px';
            iframe.style.bottom = '60px';
            iframe.style.right = '100px';
            iframe.style.transform = 'scale(1)';
            robotIcon.classList.remove('fa-robot');
            robotIcon.classList.add('fa-times');
            robotIcon.style.color = 'white';
            button.style.backgroundColor = '#ffc700';
            button.style.width = '70px';
            button.style.height = '70px';
            robotIcon.style.transform = 'rotate(180deg)';
        } else {
            iframe.style.width = '0';
            iframe.style.height = '0';
            iframe.style.bottom = '100px';
            iframe.style.right = '20px';
            iframe.style.transform = 'scale(0)';
            robotIcon.classList.remove('fa-times');
            robotIcon.classList.add('fa-robot');
            robotIcon.style.color = 'white';
            button.style.backgroundColor = 'gray';
            button.style.width = '60px';
            button.style.height = '60px';
            robotIcon.style.transform = 'rotate(0deg)';
            
            setTimeout(() => {
                iframe.style.visibility = 'hidden';
                iframe.style.opacity = '0';
            }, 400);
        }
    });
})();
