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

languageSwitcher.addEventListener('click', function () {
    const currentLang = document.documentElement.lang; // Текущий язык
    const currentPath = window.location.pathname; // Текущий путь
    let newLang = '';
    let newFile = '';

    if (currentPath.includes('pit-stop')) {
        // Если находимся на странице сервиса
        if (currentLang === 'ru') {
            newLang = 'uk';
            newFile = 'pit-stop-ua.html';
        } else if (currentLang === 'uk') {
            newLang = 'en';
            newFile = 'pit-stop-en.html';
        } else if (currentLang === 'en') {
            newLang = 'cs';
            newFile = 'pit-stop-cz.html';
        } else if (currentLang === 'cs') {
            newLang = 'ru';
            newFile = 'pit-stop-ru.html';
        }
    } else {
        // Если находимся на главной странице
        if (currentLang === 'ru') {
            newLang = 'uk';
            newFile = 'index-ua.html';
        } else if (currentLang === 'uk') {
            newLang = 'en';
            newFile = 'index-en.html';
        } else if (currentLang === 'en') {
            newLang = 'cz';
            newFile = 'index.html';
        } else if (currentLang === 'cz') {
            newLang = 'ru';
            newFile = 'index-ru.html';
        }
    }

    if (newFile) {
        document.documentElement.lang = newLang;
        window.location.href = newFile;
    } else {
        console.error('Не удалось определить новый файл для переключения языка.');
    }
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
const services = {
    cs: {
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
        { name: "Výměna zámku baterie", price: 200 },
        { name: "Demontáž a diagnostika závady motoru", price: 300 },
        { name: "Převinutí vinutí / oprava statoru", price: "2000–6000" },
        { name: "Výměna ložiska", price: 400 },
        { name: "Údržba motoru (čištění, mazání)", price: 600 },
        { name: "Vyplétání motorového kola", price: 800 },
        { name: "Diagnostika regulátoru", price: 100 },
        { name: "Výměna regulátoru", price: 200 },
        { name: "Přeprogramování / nastavení parametrů", price: 200 },
        { name: "Ochrana proti vlhkosti (hermetizace)", price: 250 },
        { name: "Diagnostika baterie (test článků na vnitřní odpor)", price: 500 },
        { name: "Výměna článku baterie", price: "150–300" },
        { name: "Oprava/výměna BMS", price: 500 },
        { name: "Oprava konektorů/kontaktů", price: "200–500" },
        { name: "Přepákování baterie (voděodolná vrstva)", price: 250 },
        { name: "Instalace přídavné baterie", price: 500 },
        { name: "Výměna Hallova senzoru v motorovém kole", price: 800 },
        { name: "Výměna pedálového senzoru PAS", price: 250 },
        { name: "Nastavení brzdových senzorů", price: 150 },
        { name: "Kontrola/oprava senzorů rychlosti a otáček", price: 400 },
        { name: "Diagnostika zkratu", price: 250 },
        { name: "Výměna poškozené kabeláže", price: 100 },
        { name: "Vytvoření nového kabelového schématu", price: "400–800" },
        { name: "Instalace ochranných bužírek / návleků", price: "30 Kč / 10 cm" },
        { name: "Oprava konektorů", price: "200–500" },
        { name: "Výměna tlačítka napájení / režimu", price: "150–300" },
        { name: "Instalace nového displeje", price: "150–250" },
        { name: "Oprava ovládacího panelu", price: "200–500" },
        { name: "Instalace plynové rukojeti / PAS senzoru", price: 100 }
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
},
ru: {
    complex: [
        { name: "Базовый сервис", price: 1000 },
{ name: "Стандартный сервис", price: 1800 },
{ name: "Полный сервис", price: 2800 }
],
single: [
    { name: "Диагностика", price: 0 },
    { name: "Настройка переключателя (переднего/заднего)", price: 150 },
    { name: "Настройка тормозов (передних/задних)", price: 150 },
    { name: "Измерение/чистка/смазка цепи", price: 200 },
    { name: "Центровка колеса", price: 300 }
],
electro: [
    { name: "Диагностика батареи", price: 500 },
    { name: "Замена ячейки батареи", price: 150 },
    { name: "Ремонт разъёмов/контактов", price: 200 },
    { name: "Тестирование электровелосипеда", price: 150 },
    { name: "Замена батареи", price: 100 },
    { name: "Замена дисплея (неинтегрированный)", price: 150 },
    { name: "Замена дисплея (интегрированный)", price: 350 },
    { name: "Замена подшипников моторного колеса", price: 200 },
    { name: "Замена кабеля между батареей и мотором", price: 400 },
    { name: "Замена датчика скорости", price: 200 },
    { name: "Замена подшипников центрального мотора", price: 300 },
    { name: "Замена замка батареи", price: 200 },
    { name: "Демонтаж и диагностика неисправности мотора", price: 300 },
    { name: "Перемотка обмотки / ремонт статора", price: "2000–6000" },
    { name: "Замена подшипника", price: 400 },
    { name: "Обслуживание мотора (чистка, смазка)", price: 600 },
    { name: "Заплетение моторного колеса", price: 800 },
    { name: "Диагностика контроллера", price: 100 },
    { name: "Замена контроллера", price: 200 },
    { name: "Перепрограммирование / настройка параметров", price: 200 },
    { name: "Защита от влаги (герметизация)", price: 250 },
    { name: "Диагностика батареи (тест ячеек на внутреннее сопротивление)", price: 500 },
    { name: "Замена ячейки батареи", price: "150–300" },
    { name: "Ремонт/замена BMS", price: 500 },
    { name: "Ремонт разъёмов/контактов", price: "200–500" },
    { name: "Герметизация батареи (водоотталкивающий слой)", price: 250 },
    { name: "Установка дополнительной батареи", price: 500 },
    { name: "Замена датчика Холла в моторном колесе", price: 800 },
    { name: "Замена педального датчика PAS", price: 250 },
    { name: "Настройка тормозных датчиков", price: 150 },
    { name: "Проверка/ремонт датчиков скорости и оборотов", price: 400 },
    { name: "Диагностика короткого замыкания", price: 250 },
    { name: "Замена повреждённого кабеля", price: 100 },
    { name: "Создание новой кабельной схемы", price: "400–800" },
    { name: "Установка защитных гофр/оболочек", price: "30 ₽ / 10 см" },
    { name: "Ремонт разъёмов", price: "200–500" },
    { name: "Замена кнопки питания / режима", price: "150–300" },
    { name: "Установка нового дисплея", price: "150–250" },
    { name: "Ремонт панели управления", price: "200–500" },
    { name: "Установка ручки газа / датчика PAS", price: 100 }
],
additional: [
    { name: "Бескамерная лента 2,5 м (1 колесо)", price: 200 },
    { name: "Доза DOT 50 мл", price: 150 },
    { name: "Доза минерального масла Sram 50 мл", price: 150 },
    { name: "Доза минерального масла Shimano 50 мл", price: 150 },
    { name: "Бескамерный герметик", price: 200 },
    { name: "Базовая мойка велосипеда", price: 300 },
    { name: "Мойка отдельных частей велосипеда", price: 100 },
    { name: "Мойка колёс", price: 100 },
    { name: "Упаковка велосипеда в коробку", price: 600 },
    { name: "Нарезка резьбы", price: 100 },
    { name: "Восстановление резьбы (через вставку)", price: 100 },
    { name: "Ослабление болта", price: 50 },
    { name: "Полная разборка велосипеда", price: 700 },
    { name: "Сборка велосипеда из коробки", price: 1600 },
    { name: "Полная сборка велосипеда из отдельных частей", price: 2500 },
    { name: "Сборка детского велосипеда", price: 700 },
    { name: "Установка подножки", price: 100 },
    { name: "Установка велокомпьютера", price: 200 },
    { name: "Установка корзины", price: 100 },
    { name: "Установка света", price: 100 },
    { name: "Установка крыльев", price: 150 },
    { name: "Установка маленьких крыльев", price: 50 },
    { name: "Нанесение малой защитной плёнки", price: 300 },
    { name: "Нанесение большой защитной плёнки", price: 500 }
],
brakes: [
    { name: "Удаление воздуха из гидравлических тормозов", price: 350 },
    { name: "Удаление воздуха из тормозной системы", price: 150 },
    { name: "Замена тормозных колодок", price: 100 },
    { name: "Настройка переднего/заднего тормоза", price: 150 },
    { name: "Чистка/настройка суппорта", price: 100 },
    { name: "Замена тормозного диска", price: 100 },
    { name: "Выравнивание тормозного диска", price: 100 },
    { name: "Фрезеровка посадочных мест тормозов", price: 300 }
],
wheels: [
    { name: "Замена покрышки", price: 150 },
    { name: "Замена камеры", price: 150 },
    { name: "Установка вставки в покрышку", price: 100 },
    { name: "Наклейка бескамерной ленты (1 слой)", price: 100 },
    { name: "Наклейка бескамерной ленты (2 слоя)", price: 150 },
    { name: "Замена ободной ленты", price: 50 },
    { name: "Очистка покрышки от герметика", price: 150 },
    { name: "Очистка обода от герметика", price: 150 },
    { name: "Замена герметика", price: 400 },
    { name: "Установка вентиля на бескамерное колесо", price: 50 },
    { name: "Центровка колеса", price: 300 }
]
}
};

// Остальная логика калькулятора остаётся без изменений

let selectedServices = [];

function updateServiceOptions() {
    const currentLang = document.documentElement.lang || 'cs'; // По умолчанию чешский
    const category = document.getElementById("service-category").value;
    const serviceType = document.getElementById("service-type");

    serviceType.innerHTML = "";

    services[currentLang][category].forEach(service => {
        const option = document.createElement("option");
        option.value = service.price;
        option.textContent = `${service.name} - ${service.price} Kč`;
        serviceType.appendChild(option);
    });
}

function formatPrice(price) {
    return typeof price === "string" ? price : `${price} Kč`;
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
    const servicePrice = selectedOption.value;

    // Проверяем, является ли цена диапазоном
    if (isNaN(servicePrice)) {
        const userPrice = prompt(`Zadejte cenu pro službu "${serviceName}" v rámci rozsahu ${servicePrice} Kč:`);
        if (!userPrice || isNaN(userPrice) || userPrice < parseInt(servicePrice.split("–")[0]) || userPrice > parseInt(servicePrice.split("–")[1])) {
            alert(`Zadejte platnou cenu v rámci rozsahu ${servicePrice} Kč.`);
            return;
        }
        selectedServices.push({ name: serviceName, price: parseInt(userPrice) * quantity });
    } else {
        selectedServices.push({ name: serviceName, price: parseInt(servicePrice) * quantity });
    }

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

function sendToTelegram(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    const token = "7120258533:AAFr3vdl55kkjk1WMszxBEqUIYbKIH1C9KQ"; // Ваш токен
    const chatId = "-1002370341473"; // ID вашей группы
    const threadId = 1119; // ID темы (ветки)
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Получаем данные из формы
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Формируем текст сообщения
    const text = `📝 Новая заявка:\n\n👤 Имя: ${name}\n📧 Email: ${email}\n📞 Телефон: ${phone}\n💬 Сообщение: ${message}`;

    // Отправляем запрос в Telegram
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, message_thread_id: threadId, text: text }),
    })
        .then(response => {
            if (response.ok) {
                alert("Сообщение успешно отправлено в Telegram!");
                document.getElementById("order-form").reset(); // Сбрасываем форму
            } else {
                alert("Ошибка при отправке сообщения.");
            }
        })
        .catch(error => console.error("Ошибка:", error));
}


document.getElementById('order-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name.length > 50 || !/^[A-Za-zÀ-ž\s]+$/.test(name)) {
        alert('Jméno může obsahovat pouze písmena a mezery (max. 50 znaků).');
        event.preventDefault();
        return;
    }

    if (email.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Zadejte platný email (max. 100 znaků).');
        event.preventDefault();
        return;
    }

    if (phone.length > 15 || !/^\+?[0-9\s\-]+$/.test(phone)) {
        alert('Telefon může obsahovat pouze čísla, mezery, pomlčky a + (max. 15 znaků).');
        event.preventDefault();
        return;
    }

    if (message.length > 500) {
        alert('Zpráva může obsahovat maximálně 500 znaků.');
        event.preventDefault();
        return;
    }
});