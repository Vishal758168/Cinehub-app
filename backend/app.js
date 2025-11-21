// backend/app.js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('🎬 CineHub Backend Running'));
app.get('/health', (req, res) => res.json({status: 'ok'}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Backend listening ${PORT}`));

