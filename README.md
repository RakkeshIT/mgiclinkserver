# 🔐 Magic Link Passwordless Authentication (Backend)

![Status](https://img.shields.io/badge/Status-Completed-brightgreen) 
![Node.js](https://img.shields.io/badge/Node.js-Backend-green) 
![Express](https://img.shields.io/badge/Express-API-yellow) 
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen) 
![MERN](https://img.shields.io/badge/MERN-FullStack-orange)

---

## 💡 Overview

This is the **backend for the Magic Link Passwordless Authentication system**.  

It allows users to **login or register using email** without a password by sending a **secure magic link**.  

✅ Generates **JWT tokens** for authentication  
✅ Uses **MongoDB Atlas** for user and token storage  
✅ Supports **one-time use magic links**  
✅ Designed for **Next.js frontend integration**  

---

## 🎯 Features

- ✉️ **Email-based magic link authentication**  
- 🔑 **Passwordless login**  
- 🛡 JWT token generation and validation  
- 🗄 MongoDB for users & tokens  
- ⚡ One-time-use magic link tokens  
- 🌐 CORS enabled for cross-origin requests  

---

## 🛠 Technologies Used

| Backend | Purpose |
|---------|---------|
| Node.js | JavaScript runtime |
| Express | REST API framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB object modeling |
| JSON Web Token | Token-based authentication |
| Nodemailer | Sending magic link emails |
| CORS | Allow cross-origin requests |
| dotenv | Environment variable management |

---

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/magiclink-backend.git
cd magiclink-backend

npm install

ENV
-----------------
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string or your local mongodb compass url
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
FRONTEND_URL=https://magiclinkfrontend.vercel.app

