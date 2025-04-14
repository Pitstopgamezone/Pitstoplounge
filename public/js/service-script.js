// следы
document.addEventListener('DOMContentLoaded', () => {
    const tracks = document.querySelectorAll('.tire-track');

    const handleScroll = () => {
        tracks.forEach(track => {
            const rect = track.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                track.style.animationPlayState = 'running'; // Запускаем анимацию
            } else {
                track.style.animationPlayState = 'paused'; // Останавливаем анимацию
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
});

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



document.addEventListener('DOMContentLoaded', function () {
    const pricingItems = document.querySelectorAll('.pricing-item');

    pricingItems.forEach(item => {
        item.addEventListener('click', function () {
            // Убираем подсветку со всех элементов
            pricingItems.forEach(el => el.classList.remove('highlight'));

            // Добавляем подсветку к текущему элементу
            this.classList.add('highlight');

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


// Полный перечень услуг
// Полный перечень услуг
const services = {
    complex: [
        { name: "Základní servis", price: 1000 },
        { name: "Standardní servis", price: 1800 },
        { name: "Kompletní servis", price: 2800 }
    ],
    single: [
        { name: "Diagnostika", price: 0 },
        { name: "Seřízení přehazovačky (přední/zadní)", price: 150 },
        { name: "Seřízení brzd (přední/zadní)", price: 150 },
        { name: "Měření/čištění/mazání řetězu", price: 200 },
        { name: "Centrovaní kola", price: 300 }
    ],
    electro: [
        { name: "Diagnostika baterie", price: 500 },
        { name: "Výměna článku baterie", price: 150 },
        { name: "Oprava konektorů/kontaktů", price: 200 },
        { name: "Testování elektrokola", price: 150 },
        { name: "Výměna baterie", price: 100 },
        { name: "Výměna displeje (neintegrovaný)", price: 150 },
        { name: "Výměna displeje (integrovaný)", price: 350 },
        { name: "Výměna ložisek motorového kola", price: 200 },
        { name: "Výměna kabelу mezi baterií a motorem", price: 400 },
        { name: "Výměna rychlostního senzoru", price: 200 },
        { name: "Výměna ložisek středového motoru", price: 300 },
        { name: "Výměna zámku baterie", price: 200 }
    ],
    additional: [
        { name: "Bezkamerní páska 2,5 m (1 kolo)", price: 200 },
        { name: "Dávka DOT 50 ml", price: 150 },
        { name: "Dávka minerálního oleje Sram 50 ml", price: 150 },
        { name: "Dávka minerálního oleje Shimano 50 ml", price: 150 },
        { name: "Bezkamerní tmel", price: 200 },
        { name: "Základní mytí kola", price: 300 },
        { name: "Mytí jednotlivých částí kola", price: 100 },
        { name: "Mytí kol", price: 100 },
        { name: "Balení kola do krabice", price: 600 },
        { name: "Řezání závitu", price: 100 },
        { name: "Obnovení závitu (přes vložku)", price: 100 },
        { name: "Povolení šroubu", price: 50 },
        { name: "Demontáž celého kola", price: 700 },
        { name: "Sestavení kola z krabice", price: 1600 },
        { name: "Kompletní sestavení kola z jednotlivých dílů", price: 2500 },
        { name: "Sestavení dětského kola", price: 700 },
        { name: "Montáž stojánku", price: 100 },
        { name: "Montáž cyklopočítače", price: 200 },
        { name: "Montáž košíku", price: 100 },
        { name: "Montáž světla", price: 100 },
        { name: "Montáž blatníků", price: 150 },
        { name: "Montáž malých blatníků", price: 50 },
        { name: "Aplikace malé ochranné fólie", price: 300 },
        { name: "Aplikace velké ochranné fólie", price: 500 }
    ],
    brakes: [
        { name: "Odzvdušnění hydraulických brzd", price: 350 },
        { name: "Odstranění vzduchu z hydraulických brzd", price: 150 },
        { name: "Výměna brzdových destiček", price: 100 },
        { name: "Seřízení přední/zadní brzdy", price: 150 },
        { name: "Čištění/seřízení třmenu", price: 100 },
        { name: "Výměna brzdového kotouče", price: 100 },
        { name: "Rovnání brzdového kotouče", price: 100 },
        { name: "Frézování brzdových dosedacích ploch", price: 300 }
    ],
    wheels: [
        { name: "Výměna pláště", price: 150 },
        { name: "Výměna duše", price: 150 },
        { name: "Instalace vložky do pláště", price: 100 },
        { name: "Lepení bezdušové pásky (1 vrstva)", price: 100 },
        { name: "Lepení bezdušové pásky (2 vrstvy)", price: 150 },
        { name: "Výměna pásky do ráfku", price: 50 },
        { name: "Čištění pláště od tmelu", price: 150 },
        { name: "Čištění ráfku od tmelu", price: 150 },
        { name: "Výměna tmelu", price: 400 },
        { name: "Montáž ventilku na bezdušové kolo", price: 50 },
        { name: "Centrovaní kola", price: 300 }
    ]
};

// Остальная логика калькулятора остаётся без изменений

let selectedServices = [];

function updateServiceOptions() {
    const category = document.getElementById("service-category").value;
    const serviceType = document.getElementById("service-type");

    serviceType.innerHTML = "";

    services[category].forEach(service => {
        const option = document.createElement("option");
        option.value = service.price;
        option.textContent = `${service.name} - ${service.price} Kč`;
        serviceType.appendChild(option);
    });
}

function addService() {
    const serviceType = document.getElementById("service-type");
    const quantity = document.getElementById("quantity").value;

    if (serviceType.selectedIndex === -1) {
        alert("Vyberte službu!");
        return;
    }

    const selectedOption = serviceType.options[serviceType.selectedIndex];
    const serviceName = selectedOption.textContent.split(" - ")[0];
    const servicePrice = parseInt(selectedOption.value) * quantity;

    selectedServices.push({ name: serviceName, price: servicePrice });

    updateSelectedServices();
    calculateTotalPrice();

    // Анимация добавления
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.classList.add("highlight");
    setTimeout(() => totalPriceElement.classList.remove("highlight"), 500);
}

function updateSelectedServices() {
    const selectedServicesList = document.getElementById("selected-services");
    selectedServicesList.innerHTML = "";

    selectedServices.forEach((service, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${service.name} - ${service.price} Kč
            <button onclick="removeService(${index})">Odstranit</button>
        `;
        selectedServicesList.appendChild(li);
    });
}

function removeService(index) {
    selectedServices.splice(index, 1);
    updateSelectedServices();
    calculateTotalPrice();
}

function calculateTotalPrice() {
    const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);
    document.getElementById("total-price").textContent = `Celková cena: ${totalPrice} Kč`;
}

function resetCalculator() {
    selectedServices = [];
    updateSelectedServices();
    calculateTotalPrice();
}

// Инициализация опций при загрузке страницы
document.addEventListener("DOMContentLoaded", updateServiceOptions);

// Обработка формы заявки
document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    alert(`Děkujeme za vaši objednávku, ${name}! Brzy vás budeme kontaktovat.`);
    
    // Здесь можно добавить логику для отправки данных на сервер
    this.reset();
});