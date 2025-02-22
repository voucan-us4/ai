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
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';

    var icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-robot');
    icon.style.fontSize = '30px';
    icon.style.color = 'white';
    icon.style.transition = 'transform 0.3s';

    button.appendChild(icon);
    document.body.appendChild(button);

    var iframe = document.createElement('iframe');
    iframe.srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-K8CCSDNPV3"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-K8CCSDNPV3');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>US4 - AI</title>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #1a1a1a;
  color: white;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 60px;
}

h1 {
  text-align: center;
  color: #444;
  margin-top: 20px;
}

#chat-container {
  border: 2px solid #444;
  height: 375px;
  width: 80%;
  max-width: 600px;
  padding: 20px;
  margin-top: 25px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #222;
  color: white;
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
  color: white;
  border: 1px solid #444;
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
  color: #444;
  border-radius: 50%;
  border: 1px solid #444;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

#send-button::before {
  content: "↑";
  font-size: 20px;
  font-weight: bold;
}

#send-button:hover {
  background-color: #555;
  transform: scale(1.1);
}

#send-button:active {
  background-color: #666;
}

img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.message {
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
}

.message.user {
  flex-direction: row-reverse;
  text-align: right;
}

.message.bot {
  flex-direction: row;
  text-align: left;
}

.message img {
  width: 30px;
  height: 30px;
  margin: 0 10px;
}
</style>
</head>
<body>
    <div id="chat-container">
<div class="message ai-message"><img src="https://voucan-us4.github.io/ai/logo.png" class="message-icon"><span>Hello! How can I help you?</span></div>
</div>
    <div id="input-container">
        <textarea id="user-input" placeholder="Type your message here..."></textarea>
        <button id="send-button"></button>
    </div>
    <script src="https://voucan-us4.github.io/storage/js/ai-html.js"></script>
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
            icon.classList.replace('fa-robot', 'fa-times');
            button.style.backgroundColor = '#ffc700';
            button.style.width = '70px';
            button.style.height = '70px';
            icon.style.transform = 'rotate(180deg)';
        } else {
            iframe.style.width = '0';
            iframe.style.height = '0';
            iframe.style.bottom = '100px';
            iframe.style.right = '20px';
            iframe.style.transform = 'scale(0)';
            icon.classList.replace('fa-times', 'fa-robot');
            button.style.backgroundColor = 'gray';
            button.style.width = '60px';
            button.style.height = '60px';
            icon.style.transform = 'rotate(0deg)';
            
            setTimeout(() => {
                iframe.style.visibility = 'hidden';
                iframe.style.opacity = '0';
            }, 400);
        }
    });
})();
