import express from 'express';import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
res.send('AIM Core API Running');
});

app.get('/api/deal-flow/run', (req, res) => {
res.json({
status: "AIM Engine Running",
dealScore: 87,
recommendation: "BUY",
notes: "Strong cash flow opportunity"
});
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});