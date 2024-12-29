// Прогресс-бар
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = `${scrollPercent}%`;
});

// Показать вкладку
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => tab.style.display = 'none'); // Скрываем все вкладки
  buttons.forEach(button => button.classList.remove('active')); // Убираем подсветку с кнопок

  document.getElementById(tabId).style.display = 'block'; // Показываем выбранную вкладку
  document.querySelector(`.${tabId}-button`).classList.add('active'); // Подсвечиваем активную кнопку
}

// Убедитесь, что первая вкладка активна по умолчанию
document.addEventListener('DOMContentLoaded', () => {
  showTab('club');
});

// Показать основной контент после анимации
window.onload = function() {
  setTimeout(function() {
    document.getElementById('neon-text-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    showTab('club'); // Показываем вкладку по умолчанию

    // Показать кнопки после заставки
    document.getElementById('header-left').style.opacity = 1;
    document.querySelector('.tabs').style.opacity = 1;
    document.getElementById('language-selector').style.opacity = 1;
    fetchBalance(); // Загружаем баланс при загрузке
  }, 4000);
};

// Применение изменений для языков
function changeLanguage(language) {
  const translations = {
    en: {
      "club-description": "Information about the computer club, photos, contact details, and map.",
      "service-description": "Details about bike and scooter repair and rental services.",
      "club-button": "Computer Club",
      "service-button": "Pit-Stop Service",
      "token-button": "Token",
      "online-booking": "Online Booking",
      "claimTokens": "Claim Tokens",
      "exchangeTokens": "Exchange 10 PTC"
    },
    ru: {
      "club-description": "Информация о компьютерном клубе, фотографии, контактные данные и карта.",
      "service-description": "Подробности о ремонте и аренде велосипедов и самокатов.",
      "club-button": "Компьютерный клуб",
      "service-button": "Pit-Stop Сервис",
      "token-button": "Токен",
      "online-booking": "Онлайн-бронирование",
      "claimTokens": "Получить токены",
      "exchangeTokens": "Обменять 10 PTC"
    },
    uk: {
      "club-description": "Інформація про комп'ютерний клуб, фотографії, контактні дані та карта.",
      "service-description": "Деталі про ремонт і оренду велосипедів та самокатів.",
      "club-button": "Комп'ютерний клуб",
      "service-button": "Pit-Stop Сервіс",
      "token-button": "Токен",
      "online-booking": "Онлайн бронювання",
      "claimTokens": "Отримати токени",
      "exchangeTokens": "Обміняти 10 PTC"
    },
    cz: {
      "club-description": "Informace o počítačovém klubu, fotky, kontaktní údaje a mapa.",
      "service-description": "Podrobnosti o opravách a pronájmu bicyklů a koloběžek.",
      "club-button": "Počítačový klub",
      "service-button": "Pit-Stop Služby",
      "token-button": "Token",
      "online-booking": "Online rezervace",
      "claimTokens": "Získat tokeny",
      "exchangeTokens": "Vyměnit 10 PTC"
    }
  };

  // Перевод для всех элементов с id и для кнопок вкладок
  const elementsToTranslate = document.querySelectorAll('[id], .tab-button');

  elementsToTranslate.forEach(element => {
    const id = element.id || element.className.split(' ').find(cls => cls.includes('-button'));
    if (translations[language] && translations[language][id]) {
      element.innerText = translations[language][id];
    }
  });
}

// Получаем баланс с сервера
async function fetchBalance() {
  const response = await fetch('http://localhost:3000/balance');
  const data = await response.json();
  document.getElementById('balance').textContent = data.balance;
}

// Обмен токенов
async function exchangeTokens() {
  const response = await fetch('/exchange', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tokens: 10 })
  });

  if (response.ok) {
    const data = await response.json();
    alert(data.message);
    fetchBalance(); // Обновляем баланс после обмена
  } else {
    const error = await response.json();
    alert(error.message);
  }
}

// Получаем 10 токенов
async function claimTokens() {
  const response = await fetch('http://localhost:3000/claim', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  const data = await response.json();
  alert(data.message);
  fetchBalance(); // Обновляем баланс после получения токенов
}

// События для кнопок
document.getElementById('claimTokens').addEventListener('click', claimTokens);
document.getElementById('exchangeTokens').addEventListener('click', exchangeTokens);

// Инициализация выбора языка
document.getElementById('language-dropdown').addEventListener('change', (e) => {
  changeLanguage(e.target.value);
});
