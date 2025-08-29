# 💬 Real-Time Chat Application

## 🚀 Description
Built a **real-time chat application** using a WebSocket server for seamless communication. Developed **7+ REST APIs**, implemented secure authentication using JWT 🔐 and bcrypt for password hashing, and managed sessions with cookies 🍪. Added file sharing functionality by encoding files in Base64 📁 and storing them on the server with a custom path logic in the upload directory. The backend efficiently handles user presence, message storage, and retrieval 🗂️.

## ✨ Features
- 💬 Real-time messaging with WebSockets  
- 🔐 User authentication with JWT & bcrypt  
- 🍪 Session management using cookies  
- 📁 File sharing via Base64-encoded files  
- 🛠️ REST APIs for user & message management  
- 🌐 User presence tracking (online/offline status)  
- 🗂️ Custom file path logic in upload directory

## 🛠 Tech Stack
- Backend: Node.js, Express.js, WebSocket  
- Database: MongoDB (with Mongoose)  
- Authentication: JWT, bcrypt  
- File handling: Base64 encoding, fs module  
- Frontend: React.js

## 🎯 Usage
- Register and login users 📝  
- Chat in real-time with connected users 💬  
- Upload and share files in chat 📁  
- Frontend accesses uploaded files via `/uploads/<filename>` URL 🌐
