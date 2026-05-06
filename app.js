require("dotenv").config();
const express = require("express");
const authMiddleware = require("./middleware/auth");

const app = express();
app.use(express.json());

// Public route
app.get("/", (req, res) => {
  res.send("Public API working");
});

// Protected route
app.get("/secure", authMiddleware, (req, res) => {
  res.send("Welcome Admin! Secure data accessed.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));