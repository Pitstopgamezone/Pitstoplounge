// Массив заранее подготовленных ответов
const predefinedAnswers = {
    "привет": "Здравствуйте! Чем могу помочь?",
    "цены": "Цены на аренду велосипедов начинаются от $5 в час. Ремонт велосипедов стоит от $15.",
    "ремонт велосипедов": "Мы предоставляем услуги по ремонту всех типов велосипедов, включая спортивные модели.",
    "аренда самокатов": "Аренда самокатов доступна на нашем сервисе, стоимость зависит от времени аренды.",
    "как добраться": "Мы находимся по адресу: Chrudimská 2526/2a, 130 00 Vinohrady."
};

// Функция для отправки сообщения
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    if (userInput === "") return;

    // Показать сообщение пользователя в чате
    displayMessage(userInput, 'user');

    // Ответ бота
    let botResponse = predefinedAnswers[userInput] || "Извините, я не понимаю этот запрос.";
    
    // Показать ответ бота
    setTimeout(() => displayMessage(botResponse, 'bot'), 500);

    // Очистить поле ввода
    document.getElementById("user-input").value = "";
}

// Функция для отображения сообщений в чате
function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender + "-message");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    // Прокручиваем чат до самого низа
    chatBox.scrollTop = chatBox.scrollHeight;
}
