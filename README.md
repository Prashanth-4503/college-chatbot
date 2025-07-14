# 🤖 College Chatbot

An interactive college chatbot built using **HTML, CSS, JavaScript**, and a **Node.js** backend powered by the **Cohere API** for generating intelligent responses.

> 🚀 Ideal for students, help desks, or institutions wanting to automate student FAQs and interactions.

---

## 📂 Project Structure

```
college-chatbot/
├── node_modules/
├── public/
│   ├── chatbot.html
│   ├── chatbot.js
│   └── style.css
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Features

* 💬 Real-time chatbot interface
* 🧠 AI-powered responses using **Cohere API**
* 🎨 Clean UI with responsive layout (Bootstrap-based)
* 🌐 Runs on a local Node.js server

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Prashanth-4503/college-chatbot.git
cd college-chatbot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your Cohere API Key

Edit `server.js` and replace this line with your real API key:

```javascript
const cohereApiKey = "your-api-key";
```

> 🔒 Keep your API key secure — don't push it to GitHub.

### 4. Start the chatbot server

```bash
node server.js
```

Then open your browser and visit:
➡️ `http://localhost:3000`

---

## 🗀️ Screenshots

Add these in a `screenshots/` folder:

| Chatbot UI                | Response Output                       |
| ------------------------- | ------------------------------------- |
| ![UI](screenshots/ui.png) | ![Response](screenshots/response.png) |

---

## 🛠️ Built With

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **AI Provider:** Cohere Generate API
* **UI Framework:** Bootstrap

---

## 🌟 Future Improvements

* 🔐 Add user authentication
* 📂 Save chat history in MongoDB or local files
* 🎤 Add speech-to-text/voice response
* 🌐 Deploy on Render or Vercel

---

## 📄 License

MIT License. Free to use with credit.

---

## 👨‍💻 Author

Made with ❤️ by [Prashanth-4503](https://github.com/Prashanth-4503)

---

## 🙌 Support

If you like this project, consider ⭐ starring the repo or contributing!
