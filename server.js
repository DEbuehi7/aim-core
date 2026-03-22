import express from "express";import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, "public");

const PORT = process.env.PORT || 10000;

// FORCE HTML RESPONSE FOR EVERYTHING EXCEPT API
app.use((req, res, next) => {
if (req.path.startsWith("/api")) return next();

const html = fs.readFileSync(path.join(publicPath, "index.html"));

res.writeHead(200, {
"Content-Type": "text/html",
});

res.end(html);
});

// API ROUTE
app.get("/api/deal-flow/run", (req, res) => {
res.json({
status: "success",
message: "AIM Deal Engine is running",
timestamp: new Date().toISOString(),
});
});

app.listen(PORT, () => {
console.log(`🔥 AIM CORE running on port ${PORT}`);
});