const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const searchRoutes = require('./controllers/search');
app.use('/', searchRoutes);

app.get('/', (req, res) => {
    res.send('Hello there!');
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowed!');
});

module.exports = app;
