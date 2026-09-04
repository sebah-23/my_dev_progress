# 🤖 ChatGPT Clone

A full-stack **ChatGPT-style AI application** built with **React, Node.js, Express.js, and MySQL**.

The project demonstrates how a modern AI application connects a frontend interface, backend API, database, and AI model together.

---

## 🚀 Tech Stack

| Technology    | Purpose               |
| ------------- | --------------------- |
| ⚛️ React      | Frontend UI           |
| 🟢 Node.js    | Backend runtime       |
| 🚂 Express.js | REST API & server     |
| 🗄️ MySQL     | Database              |
| 🤖 AI API     | Generate AI responses |
| 🔐 dotenv     | Environment variables |

---

## 🏗️ Project Architecture

```text
        👤 User
          │
          ▼
   ⚛️ React Frontend
          │
          ▼
   🚂 Express API
          │
          ▼
    🟢 Node.js Backend
       ┌────┴────┐
       ▼         ▼
   🗄️ MySQL    🤖 AI API
       │         │
       └────┬────┘
            ▼
       💬 AI Response
            │
            ▼
      ⚛️ React UI
```

---

## 🎨 Frontend — React

The React frontend is responsible for creating the ChatGPT-like interface.

### Main Responsibilities

* 💬 Display conversations
* ✍️ Allow users to enter messages
* 📤 Send messages to the backend
* ⏳ Show loading states
* 🤖 Display AI responses
* 🔄 Update the chat dynamically

### Example Components

```text
src/
├── components/
│   ├── Chat.jsx
│   ├── Message.jsx
│   ├── Sidebar.jsx
│   └── InputBox.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Backend — Node.js & Express

The backend connects the React application with the database and AI service.

### Main Responsibilities

* 🌐 Create API endpoints
* 📩 Receive user messages
* 🤖 Send prompts to the AI API
* 💾 Save conversations
* 📤 Return AI responses
* 🔐 Protect API keys

### Example API Routes

```text
POST   /api/chat
GET    /api/conversations
GET    /api/messages/:conversationId
POST   /api/conversations
DELETE /api/conversations/:id
```

---

## 🗄️ Database — MySQL

MySQL stores users, conversations, and messages.

### Database Structure

```text
Users
  │
  └── Conversations
          │
          └── Messages
```

### Messages Table

| Field             | Description           |
| ----------------- | --------------------- |
| `id`              | Message ID            |
| `conversation_id` | Related conversation  |
| `role`            | `user` or `assistant` |
| `content`         | Message text          |
| `created_at`      | Message time          |

---

## 🤖 AI Integration

The basic conversation flow is:

```text
User enters message
        ↓
React sends request
        ↓
Express receives message
        ↓
Node.js calls AI API
        ↓
AI generates response
        ↓
Response saved in MySQL
        ↓
Response sent to React
        ↓
User sees AI response
```

---

## 🔐 Environment Variables

Sensitive information should be stored in a `.env` file.

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=chatgpt_clone
AI_API_KEY=your_api_key
```

⚠️ **Never expose API keys in the React frontend or commit `.env` to GitHub.**

---

## 📚 What I Am Learning

Through this project, I am practicing:

* ⚛️ React components and state
* 🔄 API requests
* 🟢 Node.js
* 🚂 Express.js
* 🗄️ MySQL & SQL queries
* 🔗 Frontend–backend communication
* 🤖 AI API integration
* 🔐 Environment variables
* 💬 Chat application architecture
* 🧩 Full-stack application development

---

## 🎯 Main Goal

Build a complete AI-powered application where:

```text
React
  ↓
Express
  ↓
Node.js
  ↓
MySQL + AI API
  ↓
React
```

The goal is to understand how **frontend, backend, database, and AI services work together in a real-world full-stack application.**

---

## 🌟 Project Status

🚧 **Currently in Development**

More features will be added as the project progresses.
