const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "AIM CORE RUNNING 🚀" });
});

app.get("/api/deal-flow/run", (req, res) => {
  res.json({
    status: "success",
    message: "AIM Deal Engine is running",
    timestamp: new Date()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});