# THE BEAUTY BAR | Makeover Studio & Salon Booking Web Application

An end-to-end modern Makeup Studio & Salon appointment booking platform built with **React (Vite)** and **Node.js (Express)** with **JWT User Authentication**, service & artist selection, and responsive glassmorphism UI. Tagline: *"Celebrate The Beauty Of Being You"*.

---

## 🌟 Key Features

- **Luxury Modern UI & Design System:** Obsidian dark backdrop, champagne gold gradients, glassmorphism card elevation, and smooth micro-animations.
- **JWT User Authentication:** Sign In & Registration modal with password hashing (`bcryptjs`) and token persistence.
- **Service Catalog & Bridal Packages:** Filterable catalog (Bridal, Airbrush, Party Glam, Hair Couture, Skin Spa, Nail Extensions) with pricing, duration, ratings, and highlights.
- **Master Artist Portfolio:** Selection of celebrity master artists with rating, experience, and custom slot availability.
- **Interactive Booking Engine:** Multi-step reservation flow (Service -> Artist -> Date & Time Slot -> Contact Info & Notes).
- **User Booking Dashboard:** Live status tracker for active & past reservations with instant cancellation support.

---

## 🚀 How to Run Locally

### 1. Start Backend API Server
```bash
cd backend
npm install
npm start
```
*Backend runs on `http://localhost:9005`.*

### 2. Start Frontend Dev Server
Open a second terminal window:
```bash
cd frontend
npm install
npm run dev
```
*Frontend runs on `http://localhost:9000`.*

---

## 🌐 1-Click FREE Deployment Instructions

### Option 1: Deploy to Vercel (Frontend & Backend together)

1. Install Vercel CLI (optional) or push code to GitHub:
   ```bash
   npx vercel
   ```
2. Follow the prompts: Vercel automatically detects `vercel.json` and deploys both Frontend and Backend API in 1 click for free!

---

### Option 2: Deploy Backend to Render & Frontend to Vercel

1. **Deploy Backend to Render (Free Tier):**
   - Push repository to GitHub.
   - Go to [render.com](https://render.com) -> New Web Service -> Connect Git Repository.
   - Set Root Directory: `makeup-studio-app/backend`.
   - Build Command: `npm install`.
   - Start Command: `node server.js`.
   - Get your live backend URL (e.g., `https://aura-makeup-studio-api.onrender.com`).

2. **Deploy Frontend to Vercel (Free Tier):**
   - Go to [vercel.com](https://vercel.com) -> Add New Project -> Select `makeup-studio-app/frontend`.
   - Add Environment Variable:
     `VITE_API_URL` = `https://aura-makeup-studio-api.onrender.com/api`
   - Click **Deploy**!

---

## 🔑 Demo Account Credentials

- **Email:** `priya@example.com`
- **Password:** `Password123!`
*(Or create your own new account in seconds via the Sign Up modal!)*
