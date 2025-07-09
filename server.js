require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    try {
        const API_URL = "https://api.cohere.ai/v1/chat";
        const API_KEY = process.env.COHERE_API_KEY;

        const requestBody = {
            model: "command-r",
            message: userMessage,
            temperature: 0.7
        };

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        res.json({ response: data.text || "No response from AI." });
    } catch (error) {
        console.error("Error fetching AI response:", error);
        res.status(500).json({ response: "Error connecting to AI." });
    }
});

// ✅ Use dynamic import to support open (ESM)
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    import('open').then(open => open.default(`http://localhost:${PORT}`));
});
