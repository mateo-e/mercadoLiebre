const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
});

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/views/home.html')));

app.get('/login', (req, res) =>
    res.sendFile(path.join(__dirname, '/views/login.html')));

app.get('/registro', (req, res) =>
    res.sendFile(path.join(__dirname, '/views/register.html')));

app.use(express.static('public'));