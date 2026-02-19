# Assignment Evaluation System

A full-stack web application that allows students to submit assignments and receive AI-based evaluation feedback, while instructors can review all submissions.

---

## 🚀 Tech Stack


### Backend
- Node.js
- Express.js
- CORS
- Deployed on Render

---

## 🌐 Deployed URLs

- Backend:
- https://assignment-backend-h9cx.onrender.com
- https://assignment-backend-h9cx.onrender.com/submissions
       

---

## 📌 Features

### Student Module
- Submit assignment text
- Receive plagiarism risk percentage
- Receive score and feedback

### Instructor Module
- View all submitted assignments
- See plagiarism score and evaluation feedback

---

## 🧠 AI Evaluation Logic

- Rule-based evaluation
- Plagiarism risk generated using random percentage
- Feedback generated based on content length and plagiarism score

---

## 🗂 Database Schema (Logical Design)

The system follows a logical database design with three entities:

- Student
- Assignment
- Submission

Each submission stores assignment content, plagiarism score, evaluation score, and feedback.
(Current implementation uses in-memory storage but is designed for database integration.)
---

## 🛠 How to Run Locally

### Backend
```bash
cd assignment-backend
npm install
npm run dev

Backend runs on:

http://localhost:5000
