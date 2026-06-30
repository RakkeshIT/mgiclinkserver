<div align="center">

# 🔐 Magic Link Authentication

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=00D9FF&center=true&vCenter=true&width=600&lines=Passwordless+Authentication+System;AI-Powered+Interview+Coach;Next.js+%2B+Express+%2B+MongoDB+%2B+Groq+AI" alt="Typing SVG" />

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Express](https://img.shields.io/badge/Express.js-Backend-yellow?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Groq AI](https://img.shields.io/badge/Groq-AI%20Powered-FF6B35?style=for-the-badge&logo=artificial-intelligence&logoColor=white)](https://groq.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<br/>

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Now-00D9FF?style=for-the-badge)](https://magiclinkfrontend.vercel.app)
[![API Server](https://img.shields.io/badge/⚡%20API%20Server-Live-brightgreen?style=for-the-badge)](https://mgiclinkserver.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](LICENSE)

</div>

---

## ✨ What is Magic Link Auth?

> **No passwords. No OTPs. Just click and login! 🚀**

Magic Link Authentication is a **Full Stack AI-Powered** project where users log in simply by entering their email. A secure magic link is sent to their inbox — click it, token gets verified, and they land straight on their dashboard. **Zero passwords needed!**

On top of that, the dashboard includes an **AI Interview Coach** powered by **Groq AI** that generates customized interview questions based on your role and skill level. 💡

---

## 🎯 Core Features

| Feature | Description |
|--------|-------------|
| 📧 **Magic Link Login** | Login via email — no password required |
| 🔑 **JWT Authentication** | Secure token generation & validation |
| ♻️ **One-Time Use Tokens** | Each magic link expires after single use |
| 🤖 **Groq AI Interview Coach** | AI-generated interview questions by role & level |
| 🗄️ **MongoDB Atlas** | Cloud database for users & tokens |
| 🌐 **CORS Enabled** | Seamless Next.js ↔ Express communication |
| 📱 **Responsive UI** | Built with Tailwind CSS — mobile-first design |
| ⚡ **Token Expiry Control** | Configurable token expiration (default: 10 mins) |

---

## 🏗️ Tech Stack

```
┌─────────────────────────────────────────────┐
│              MAGIC LINK AUTH                │
├──────────────┬──────────────────────────────┤
│   FRONTEND   │         BACKEND              │
├──────────────┼──────────────────────────────┤
│  Next.js 15  │  Express.js (REST API)       │
│  Tailwind CSS│  MongoDB Atlas + Mongoose    │
│  TypeScript  │  JWT (JSON Web Token)        │
│              │  Nodemailer (Mail Service)   │
│              │  Groq AI (Interview Coach)   │
└──────────────┴──────────────────────────────┘
```

---

## 🔄 How It Works

```
User enters Email
       │
       ▼
  Backend generates
  secure token & saves to DB
       │
       ▼
  Magic Link sent to Email
  (via Nodemailer)
       │
       ▼
  User clicks the link
       │
       ▼
  Token verified (one-time use)
  → Expired & deleted from DB
       │
       ▼
  JWT issued → User logged in
       │
       ▼
  🎉 Dashboard + AI Interview Coach
```

---

## 📁 Project Structure

```
magic-link-auth/
│
├── 📂 frontend/                  # Next.js App
│   ├── app/
│   │   ├── page.tsx              # Login page (email input)
│   │   ├── dashboard/            # Protected dashboard
│   │   │   └── page.tsx          # AI Interview Coach
│   │   └── verify/               # Token verification page
│   ├── components/
│   └── .env.local
│
├── 📂 backend/                   # Express.js Server
│   ├── routes/
│   │   ├── auth.js               # Magic link routes
│   │   └── ai.js                 # Groq AI routes
│   ├── models/
│   │   ├── User.js               # User schema
│   │   └── Token.js              # Magic token schema
│   ├── utils/
│   │   └── sendMail.js           # Nodemailer config
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification
│   ├── server.js
│   └── .env
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

- ✅ Node.js v18+
- ✅ npm or yarn
- ✅ MongoDB Atlas account (free tier works!)
- ✅ Gmail account (for sending magic links)
- ✅ Groq API key (free at groq.com)

---

### ⚙️ Backend Setup

**1. Clone & Install**

```bash
git clone https://github.com/RakkeshIT/mgiclinkserver.git
cd magiclink-backend
npm install
```

**2. Create `.env` file**

```env
# ── Server ──────────────────────────────────
PORT=5000
NODE_ENV=development

# ── MongoDB ─────────────────────────────────
MONGODB_URI=your_mongodb_atlas_connection_string

# ── JWT ─────────────────────────────────────
JWT_SECRET=your_jwt_secret_key
TOKEN_EXPIRE=10

# ── Email (Nodemailer) ───────────────────────
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

# ── URLs ─────────────────────────────────────
BASE_URL=http://localhost:3000
LIVE_BASE_URL=https://magiclinkfrontend.vercel.app

# ── Groq AI ──────────────────────────────────
GROQ_API_KEY=your_groq_api_key
```

**3. Run the server**

```bash
npm run dev     # Development
npm start       # Production
```

Server runs at → `http://localhost:5000` ✅

---

### 🖥️ Frontend Setup

**1. Clone & Install**

```bash
git clone https://github.com/RakkeshIT/magiclinkfrontend.git
cd magiclink-frontend
npm install
```

**2. Create `.env.local` file**

```env
# ── API URLs ─────────────────────────────────
NEXT_PUBLIC_BASE_URL=https://mgiclinkserver.vercel.app
NEXT_PUBLIC_BASE_URL_DEVELOPMENT=http://localhost:5000
NODE_ENV=development
```

**3. Run the frontend**

```bash
npm run dev
```

Frontend runs at → `http://localhost:3000` ✅

---

## 🔑 How to Generate / Get Required Keys

<details>
<summary><b>🔐 JWT Secret Key — Click to expand</b></summary>

Generate a strong JWT secret using Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Copy the output and paste it as `JWT_SECRET` in your `.env` file.

</details>

<details>
<summary><b>📧 Gmail App Password — Click to expand</b></summary>

Gmail no longer allows regular passwords for apps. You need an **App Password**:

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **Security** → Enable **2-Step Verification**
3. Go to **Security** → **App passwords**
4. Select App: `Mail` → Device: `Other (Custom name)`
5. Type `Magic Link App` → Click **Generate**
6. Copy the 16-character password
7. Paste it as `EMAIL_PASS` in your `.env`

> ⚠️ Never use your regular Gmail password — always use App Password!

</details>

<details>
<summary><b>🤖 Groq API Key — Click to expand</b></summary>

Get your FREE Groq API key in minutes:

1. Visit [console.groq.com](https://console.groq.com)
2. Sign up / Login with Google
3. Go to **API Keys** section
4. Click **Create API Key**
5. Copy and paste it as `GROQ_API_KEY` in your `.env`

> 💡 Groq gives generous free tier — perfect for this project!

</details>

<details>
<summary><b>🍃 MongoDB Atlas URI — Click to expand</b></summary>

1. Visit [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free cluster (M0 Sandbox)
3. Click **Connect** → **Drivers**
4. Copy the connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/magiclink?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your Atlas credentials
6. Paste it as `MONGODB_URI` in your `.env`

</details>

---

## 🌐 API Endpoints

### Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/send-link` | Send magic link to email |
| `GET` | `/api/auth/verify?token=xxx` | Verify token & return JWT |
| `GET` | `/api/auth/me` | Get current user (protected) |

### AI Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/ai/interview` | Generate interview questions via Groq |

---

## 🤖 Groq AI — Interview Coach

The dashboard includes an AI-powered **Interview Question Generator**:

- 🎯 Enter your **Job Role** (e.g., Frontend Developer)
- 📊 Select **Experience Level** (Fresher / Mid / Senior)
- 🧠 Choose **Tech Stack** (React, Node.js, MongoDB, etc.)
- 🚀 Get **10 custom interview questions** generated by Groq AI instantly!

```
User fills form → POST /api/ai/interview
                        │
                        ▼
              Groq AI (llama3-8b-8192)
              processes the request
                        │
                        ▼
              Returns structured Q&A
              displayed on dashboard 🎉
```

---

## 🚢 Deployment

### Deploy Backend to Vercel

```bash
npm install -g vercel
vercel --prod
```

Add all `.env` variables in **Vercel Dashboard → Settings → Environment Variables**

### Deploy Frontend to Vercel

```bash
cd frontend
vercel --prod
```

Update `NEXT_PUBLIC_BASE_URL` to your live backend URL after deployment.

---

## 📸 Screenshots

> 🖼️ Add your screenshots here after deployment!

| Login Page | Email Sent | Dashboard |
|-----------|-----------|-----------|
| *(Screenshot)* | *(Screenshot)* | *(Screenshot)* |

---

## 🙋‍♂️ Author

<div align="center">

**Rakkesh** — Full Stack Developer & Educator

[![Portfolio](https://img.shields.io/badge/Portfolio-rakkeshaifolio.vercel.app-00D9FF?style=for-the-badge&logo=vercel)](https://rakkeshaifolio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rakkeshit)
[![YouTube](https://img.shields.io/badge/YouTube-VairaaCoders-FF0000?style=for-the-badge&logo=youtube)](https://youtube.com/@VairaaCoders)
[![Instagram](https://img.shields.io/badge/Instagram-@vairaacoders-E4405F?style=for-the-badge&logo=instagram)](https://instagram.com/vairaacoders)

*Building & Teaching Full Stack Development* 🚀

</div>

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and learn from it!

---

<div align="center">

**Made with ❤️ by Rakkesh | Vairaa Coders**

*If this project helped you, give it a ⭐ on GitHub!*

</div>
