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
            // Переключаем класс active для заголовка
            this.classList.toggle('active');

            // Находим следующую строку (детали прайса)
            const detailsRow = this.nextElementSibling;

            // Проверяем, есть ли у следующей строки класс pricing-details
            if (detailsRow && detailsRow.classList.contains('pricing-details')) {
                // Переключаем видимость строки
                if (detailsRow.style.display === 'none' || !detailsRow.style.display) {
                    detailsRow.style.display = 'table-row';
                } else {
                    detailsRow.style.display = 'none';
                }
            }
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

languageSwitcher.addEventListener('click', function() {
    const currentLang = document.documentElement.lang;
    let newLang = 'en';
    let newFile = 'pit-stop-en.html';

    if (currentLang === 'ru') {
        newLang = 'ua';
        newFile = 'pit-stop-ua.html';
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

    document.documentElement.lang = newLang;
    window.location.href = newFile;
});

// Get the modal
var modal = document.getElementById("privacy-policy-modal");

// Get the button that opens the modal
var btn = document.getElementById("privacy-policy-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    const currentLang = document.documentElement.lang;
    let policyFile = 'privacy-policy-bike-en.txt';

    if (currentLang === 'ru') {
        policyFile = 'privacy-policy-bike-ru.txt';
    } else if (currentLang === 'cs') {
        policyFile = 'privacy-policy-bike-cz.txt';
    } else if (currentLang === 'uk') {
        policyFile = 'privacy-policy-bike-ua.txt';
    }

    fetch('documents/' + policyFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('privacy-policy-text').textContent = data;
            modal.style.display = "block";
        });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


