document.addEventListener("DOMContentLoaded", function () {
    // Logout Functionality
    document.getElementById("logout-link").addEventListener("click", function () {
        window.location.href = "login.html";
    });

    // Chatbot Functionality
    document.getElementById("send-btn").addEventListener("click", sendMessage);
    document.getElementById("user-input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });

    async function sendMessage() {
        const input = document.getElementById("user-input");
        const message = input.value.trim();
        if (!message) return;

        // Append user message to chat
        appendMessage("You", message, "justify-content-end", "bg-primary");
        input.value = "";

        try {
            const response = await fetchChatbotResponse(message);
            appendMessage("Bot", response, "justify-content-start", "bg-success");
        } catch (error) {
            appendMessage("Bot", "Sorry, I couldn't fetch a response.", "justify-content-start", "bg-danger");
        }
    }

    function appendMessage(sender, text, alignment, bubbleStyle) {
        const chatContainer = document.getElementById("chat-container");
        const messageDiv = document.createElement("div");
        messageDiv.className = `d-flex mb-3 ${alignment}`;

        const bubble = document.createElement("div");
        bubble.className = `p-3 rounded-3 ${bubbleStyle}`;
        bubble.style.maxWidth = "70%";
        bubble.innerHTML = `<strong>${sender}:</strong> ${text}`;

        messageDiv.appendChild(bubble);
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    async function fetchChatbotResponse(userMessage) {
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();
        return data.response;
    }
});
