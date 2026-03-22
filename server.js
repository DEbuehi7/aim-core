import express from "express";import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔥 DEFINE PUBLIC DIR EXPLICITLY
const publicPath = path.join(__dirname, "public");

const PORT = process.env.PORT || 10000;

// 🔥 FORCE STATIC SERVING FROM /public ONLY
app.use(express.static(publicPath));

// 🔥 API
app.get("/api/deal-flow/run", (req, res) => {
res.json({
status: "success",
message: "AIM Deal Engine is running",
timestamp: new Date().toISOString(),
});
});

// 🔥 HARD ROOT RESPONSE (FORCE HTML)
app.get("/", (req, res) => {
res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
console.log(`🔥 AIM CORE running on port ${PORT}`);
});