import express from "express";import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, "public");

const PORT = process.env.PORT || 10000;

// API
app.get("/api/deal-flow/run", (req, res) => {
res.json({
status: "success",
message: "AIM Deal Engine is running",
timestamp: new Date().toISOString(),
});
});

// FORCE HTML RESPONSE
app.get("/", (req, res) => {
res.setHeader("Content-Type", "text/html");
res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
console.log(`🔥 AIM CORE running on port ${PORT}`);
});