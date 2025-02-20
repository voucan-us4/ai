const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const apiKey = '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';
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
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "deepseek-r1-distill-qwen-32b",
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
});
