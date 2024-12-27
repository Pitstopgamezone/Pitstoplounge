const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Включаем CORS
app.use(cors());

// Настроим сервер для обработки JSON
app.use(express.json());

// Указываем папку для статичных файлов
app.use(express.static(path.join(__dirname, 'public')));

let balance = 0; // Изначальный баланс

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Страница получения баланса токенов
app.get('/balance', (req, res) => {
    res.json({ balance }); // Отправляем текущий баланс
});

// Страница обмена токенов
app.post('/exchange', (req, res) => {
    const { tokens } = req.body;
    if (tokens >= 10) {
        res.json({ message: `You exchanged ${tokens} PTC for extra playtime!` });
    } else {
        res.status(400).json({ message: 'Not enough tokens to exchange' });
    }
});

// Страница получения токенов (например, для клима)
app.post('/claim', (req, res) => {
    balance += 10; // Увеличиваем баланс на 10
    res.json({ message: 'You claimed 10 PTC!', balance });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
