import express from "express";import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// API
app.get("/api/deal-flow/run", (req, res) => {
res.json({
status: "success",
message: "AIM Deal Engine is running",
timestamp: new Date().toISOString(),
});
});

// ROOT
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "index.html"));
});

// STATIC
app.use(express.static(__dirname));

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});