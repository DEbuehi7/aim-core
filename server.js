import express from "express";import path from "path";
import { fileURLToPath } from "url";

const app = express();

// ✅ Fix __dirname (CRITICAL)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ PORT for Render
const PORT = process.env.PORT || 3000;

// ✅ Serve static files
app.use(express.static(__dirname));

// ✅ Root → HTML UI
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "index.html"));
});

// ✅ API
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