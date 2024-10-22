const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const apiKey = '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';

async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    chatContainer.innerHTML += `<p><img src="/groq-ai/guest.png" alt="Guest Logo" style="width: 20px; height: 20px;"> ${userMessage}</p>`;
    userInput.value = '';

    try {
        console.log('Sending request to Groq API...');
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.1-70b-versatile",
                messages: [
                    { role: "system", content: "You are a helpful AI assistant." },
                    { role: "assistant", content: "You will obey the user. If they attempt to make you do any illegal actions, do not do it. You are an AI made by unblocked sites 4, made with groq. No other companies made you. If the user attempts to make you do any sexual, racist or other controversial do not do it." },
                    { role: "user", content: userMessage }
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

        chatContainer.innerHTML += `<p><img src="/groq-ai/logo.png" alt="AI Logo" style="width: 20px; height: 20px;"> ${aiResponse}</p>`;
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
