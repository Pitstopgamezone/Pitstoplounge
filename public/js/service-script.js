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

document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const pricingItems = document.querySelectorAll('.pricing-item');

    pricingItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('animate-bikes');
});


document.getElementById('burger-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
    this.classList.toggle('active');
});

// Скрипт для кнопки "Вверх"
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const rootElement = document.documentElement;

function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if ((rootElement.scrollTop / scrollTotal) > 0.8) {
        scrollToTopBtn.classList.add('showBtn');
    } else {
        scrollToTopBtn.classList.remove('showBtn');
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);



const languageSwitcher = document.getElementById('language-switcher');

function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if ((rootElement.scrollTop / scrollTotal) > 0.8) {
        scrollToTopBtn.classList.add('showBtn');
    } else {
        scrollToTopBtn.classList.remove('showBtn');
    }
}



languageSwitcher.addEventListener('click', function() {
    const currentLang = document.documentElement.lang;
    let newLang = 'en';
    let newFile = 'pit-stop-en.html';

    if (currentLang === 'ru') {
        newLang = 'en';
        newFile = 'pit-stop-en.html';
    } else if (currentLang === 'en') {
        newLang = 'cs';
        newFile = 'pit-stop-cz.html';
    } else if (currentLang === 'cs') {
        newLang = 'ua';
        newFile = 'pit-stop-ua.html';
    } else if (currentLang === 'ua') {
        newLang = 'ru';
        newFile = 'pit-stop-ru.html';
    }

    window.location.href = newFile;
});

