import express from "express";import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// PUBLIC FOLDER
const publicPath = path.join(__dirname, "public");

const PORT = process.env.PORT || 10000;

// API ROUTE
app.get("/api/deal-flow/run", (req, res) => {
res.json({
status: "success",
message: "AIM Deal Engine is running",
timestamp: new Date().toISOString(),
});
});

// 🔥 ULTRA-NUCLEAR HTML SERVE (FORCE RENDER)
app.get("/", (req, res) => {
const html = fs.readFileSync(path.join(publicPath, "index.html"), "utf8");

res.setHeader("Content-Type", "text/html; charset=utf-8");
res.send(html);
});

app.listen(PORT, () => {
console.log(`🔥 AIM CORE running on port ${PORT}`);
});