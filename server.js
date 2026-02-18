import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log("Starting backend...");

let submissions = [];

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

app.post("/submit", (req, res) => {
  const { assignmentId, studentId, content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Content required" });
  }

  const plagiarismScore = Math.floor(Math.random() * 30) + 10;
  let feedback = "Good attempt.";

  if (content.length < 100) {
    feedback = "Answer is too short. Add more explanation.";
  } else if (plagiarismScore > 25) {
    feedback = "Possible plagiarism detected.";
  }

  const score = Math.max(100 - plagiarismScore, 50);

  submissions.push({
    assignmentId,
    studentId,
    content,
    plagiarismScore: plagiarismScore + "%",
    feedback,
    score
  });

  res.json({
    plagiarism_risk: plagiarismScore + "%",
    feedback_summary: feedback,
    score
  });
});

app.get("/submissions", (req, res) => {
  res.json(submissions);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
