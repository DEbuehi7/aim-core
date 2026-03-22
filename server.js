import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/deal-flow/run', (req, res) => {
res.json({
status: "AIM Engine Running",
dealScore: 87,
recommendation: "BUY",
notes: "Strong cash flow opportunity"
});
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});