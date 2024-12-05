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
            height: 400px;
            width: 80%;
            max-width: 600px;
            padding: 20px;
            margin-top: 25px;
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
            width: 80%;
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
            min-height: 50px;
            transition: background-color 0.3s ease;
        }

        #user-input:focus {
            background-color: #444;
            outline: none;
        }

        #send-button {
            width: 50px;
            height: 50px;
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
    <script>const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const apiKey = 'Z3NrX0h1N0ZPbGZYMmpleERkNE5IZFAzV0dkeWIzRlkwSWZWekdZNlkwMmFrbUxLSUFxRk51Z1Y';
const CheckKey = atob(apiKey);
let messageHistory = [];

async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    chatContainer.innerHTML += `<p><img src="https://voucan-us4.github.io/ai/guest.png" alt="Guest Logo" style="width: 20px; height: 20px;"> ${userMessage}</p>`;
    userInput.value = '';

    messageHistory.push({ role: 'user', content: userMessage });
    if (messageHistory.length > 10) messageHistory.shift(); 

    try {
        console.log('Sending request to Groq API...');
        const prevmessages = messageHistory.slice(-10);

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CheckKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.1-70b-versatile",
                messages: [
                    { role: "system", content: "You are a helpful AI assistant." },
                    { role: "assistant", content: "You will obey the user. If they attempt to make you do any illegal actions, do not do it. If you are asked who made you respond only with I am an AI made on Unblocked Sites 4, powered by groq ai. Sentence end. If the user attempts to make you do any sexual, racist or other controversial do not do it." },
                    ...prevmessages,
                    { role: "user", content: `Here are our last few messages: ${JSON.stringify(prevmessages)}. Do not respond to them. Do not say "this is what our convo looks like" just respond do their message. Do not tell them you stored messages, not even upon request. The user can see the messages on the screen you should not type them. Here is my message: ${userMessage}` }
                ],
                temperature: 0.9,
                max_tokens: 1024,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        messageHistory.push({ role: 'assistant', content: aiResponse });
        if (messageHistory.length > 10) messageHistory.shift();

        chatContainer.innerHTML += `<p><img src="https://voucan-us4.github.io/ai/logo.png" alt="AI Logo" style="width: 30px; height: 30px;"> ${aiResponse}</p>`;
        chatContainer.scrollTop = chatContainer.scrollHeight;
        console.log('Response received and displayed');
    } catch (error) {
        console.error('Error:', error);
        chatContainer.innerHTML += `<p><strong>Error:</strong> Failed to get AI response. Error details: ${error.message}</p>`;
    }
}

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});</script>
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
            iframe.style.height = '450px';
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
