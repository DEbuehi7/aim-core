import express from "express";import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ PORT (Render requires this)
const PORT = process.env.PORT || 3000;

// serve frontend
app.use(express.static(__dirname));

// root → HTML
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "index.html"));
});

// API
app.get("/api/deal-flow/run", (req, res) => {
res.json({
status: "success",
message: "AIM Deal Engine is running",
timestamp: new Date().toISOString(),
});
});

// ✅ Start server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});


git add .git commit -m "serve frontend + api"
git push