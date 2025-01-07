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

  const neonTextContainer = document.getElementById('neon-text-container');
  const delayedElements = document.querySelectorAll('.hidden');

  // Установите длительность задержки в миллисекундах
  const delayDuration = 3000; // 3 секунды, чтобы совпадало с анимацией заставки

  // Скрыть неоновую заставку после анимации
  setTimeout(() => {
      neonTextContainer.style.display = 'none';

      // Показать скрытые элементы
      delayedElements.forEach((element) => {
          element.classList.remove('hidden');
          element.classList.add('visible');
      });

      // Показываем вкладку по умолчанию
      document.getElementById('main-content').style.display = 'block';
      document.getElementById('header-left').style.opacity = 1;
      document.querySelector('.tabs').style.opacity = 1;
      document.getElementById('language-selector').style.opacity = 1;
      fetchBalance(); // Загружаем баланс при загрузке
  }, delayDuration);

  // Плавное появление нижнего блока с задержкой 4 секунды
  setTimeout(() => {
    const footerInfo = document.getElementById('footer-info');
    footerInfo.style.opacity = 1;
  }, 3000);

  // Плавное появление кнопки бронирования
  setTimeout(() => {
    const bookingButton = document.querySelector('.booking-button');
    bookingButton.style.opacity = 1;
  }, 3000);
});

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
    const id = element.id || element.classList.contains('tab-button') && element.className.split(' ').find(cls => cls.includes('-button'));
    if (translations[language] && translations[language][id]) {
      element.innerText = translations[language][id];
    }
  });
}

// Получаем баланс с сервера
async function fetchBalance() {
  try {
    const response = await fetch('http://localhost:3000/balance');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    document.getElementById('balance').textContent = data.balance;
  } catch (error) {
    console.error('Fetch balance error:', error);
  }
}

// Обмен токенов
async function exchangeTokens() {
  try {
    const response = await fetch('/exchange', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tokens: 10 })
    });

    if (!response.ok) throw new Error('Exchange request failed');
    const data = await response.json();
    alert(data.message);
    fetchBalance(); // Обновляем баланс после обмена
  } catch (error) {
    alert('Ошибка обмена токенов: ' + error.message);
  }
}

// Получаем 10 токенов
async function claimTokens() {
  try {
    const response = await fetch('http://localhost:3000/claim', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Claim request failed');
    const data = await response.json();
    alert(data.message);
    fetchBalance(); // Обновляем баланс после получения токенов
  } catch (error) {
    alert('Ошибка получения токенов: ' + error.message);
  }
}

// События для кнопок
document.getElementById('claimTokens')?.addEventListener('click', claimTokens);
document.getElementById('exchangeTokens')?.addEventListener('click', exchangeTokens);

// Инициализация выбора языка
document.getElementById('language-dropdown')?.addEventListener('change', (e) => {
  changeLanguage(e.target.value);
});

// Слушаем завершение анимации неонового текста
document.getElementById('neon-text')?.addEventListener('animationend', function() {
  // Показываем нижний блок с контактной информацией
  document.getElementById('footer-info').style.display = 'block';
});

// Плавное появление названия компании с задержкой 3 секунды
setTimeout(() => {
  const companyName = document.getElementById('company-name');
  companyName.style.opacity = 1;
}, 3000); // 3000 миллисекунд = 3 секунды

// Функция для плавного скроллинга к соответствующим блокам
document.querySelectorAll('.club-overlay ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Инициализация галереи
showSlide(0);
let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.gallery-slide');
  const totalSlides = slides.children.length;
  const slideWidth = slides.children[0].getBoundingClientRect().width;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

const canvas = document.getElementById('snake-game');
const ctx = canvas.getContext('2d');

