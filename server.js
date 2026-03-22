const express = require("express");const path = require("path");

const app = express();

// ✅ REQUIRED FOR RENDER
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