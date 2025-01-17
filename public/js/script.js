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




// Пиксельный персонаж
const character = document.getElementById('pixel-character');

// При клике — персонаж объясняет что-то
character.addEventListener('click', () => {
  alert('Привет! Я гид по вашему сайту. Нажми на меня, чтобы узнать больше!');
});

// Динамическое изменение маршрута движения
setInterval(() => {
  const randomTop = Math.random() * 90 + 5; // Случайная позиция (5% до 95%)
  const randomLeft = Math.random() * 90 + 5;
  character.style.top = `${randomTop}%`;
  character.style.left = `${randomLeft}%`;
}, 8000);

// Calendar
$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    events: [
      {
        title: 'Gaming Tournament',
        start: '2025-01-15',
        description: 'Join us for an exciting gaming tournament with great prizes!'
      },
      {
        title: 'VR Experience Night',
        start: '2025-01-22',
        description: 'Step into the world of virtual reality and experience the future of gaming.'
      }
    ]
  });
});

// Gallery
let currentImageIndex = 0;
const images = [
  'images/photo1.JPG',
  'images/photo2.JPG',
  'images/photo3.JPG',
  'images/photo4.jpg'
];

// Открытие модального окна
function openModal(index) {
  currentImageIndex = index;
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modal-image').src = images[currentImageIndex];
}

// Закрытие модального окна
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Переключение изображений
function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1; // Переход к последнему изображению
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0; // Переход к первому изображению
  }

  document.getElementById('modal-image').src = images[currentImageIndex];
}

function scrollCarousel(direction) {
  const carousel = document.querySelector('.image-carousel');
  const scrollAmount = carousel.clientWidth * 0.3; // Прокрутка на 30% ширины
  carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
  });
}

// Открытие модального окна
function openModal() {
  document.getElementById('documents-modal').style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
  document.getElementById('documents-modal').style.display = 'none';
}

// Закрытие модального окна при клике за его пределами
window.onclick = function(event) {
  const modal = document.getElementById('documents-modal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const addressLink = document.querySelector('.address-link');
  const tooltip = document.querySelector('.tooltip');

  addressLink.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
      tooltip.style.opacity = '1';
  });

  addressLink.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
      setTimeout(() => {
          tooltip.style.display = 'none';
      }, 300); // Убираем с задержкой для плавного исчезновения
  });
});
document.querySelector('.address-link').addEventListener('mouseenter', function() {
  document.querySelector('.tooltip').style.display = 'block';
});
document.querySelector('.address-link').addEventListener('mouseleave', function() {
  document.querySelector('.tooltip').style.display = 'none';
});

// баннер статуса работы
function updateServiceStatus() {
  let currentTime = new Date().getHours();
  let statusIndicator = document.getElementById('status-indicator');
  
  if (currentTime >= 22 || currentTime < 6) {
      // После 10 PM - Закрыто (красный)
      statusIndicator.textContent = "Closed";
      statusIndicator.classList.remove('status-on');
      statusIndicator.classList.add('status-off');
  } else {
      // В рабочие часы - Открыто (зеленый)
      statusIndicator.textContent = "Open";
      statusIndicator.classList.remove('status-off');
      statusIndicator.classList.add('status-on');
  }

  // Плавное появление элемента
  statusIndicator.style.opacity = 1;
}

// Проверка статуса при загрузке страницы
window.addEventListener('load', function() {
  let statusIndicator = document.getElementById('status-indicator');
  statusIndicator.style.opacity = 0; // Начальная прозрачность 0
  setTimeout(updateServiceStatus, 500); // Плавно показываем через 500ms
});



// Плавное появление нижнего блока с задержкой 4 секунды
setTimeout(() => {
  const pricingSection = document.getElementById('pricing');
  pricingSection.style.opacity = 1;
}, 3000);


$(document).ready(function(){
  $('.gallery-images').slick({
      slidesToShow: 3, // Показываем 3 изображения за раз
      slidesToScroll: 1, // Прокручиваем 1 изображение за раз
      arrows: true, // Включаем стрелки
      prevArrow: '<button class="gallery-btn prev-btn">❮</button>',
      nextArrow: '<button class="gallery-btn next-btn">❯</button>',
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});


const translations = {
  en: {
      welcome: "Welcome to Pit-Stop Lounge",
      description: "We are a small but ambitious company...",
      booking: "Online Booking"
  },
  cz: {
      welcome: "Vítejte v Pit-Stop Lounge",
      description: "Jsme malá, ale ambiciózní společnost...",
      booking: "Online Rezervace"
  },
  ru: {
      welcome: "Добро пожаловать в Pit-Stop Lounge",
      description: "Мы небольшая, но амбициозная компания...",
      booking: "Онлайн Бронирование"
  },
  uk: {
      welcome: "Ласкаво просимо до Pit-Stop Lounge",
      description: "Ми невелика, але амбіційна компанія...",
      booking: "Онлайн Бронювання"
  }
};

function changeLanguage(lang) {
  // Получить элементы для перевода
  const welcomeMessage = document.getElementById("welcome-message");
  const description = document.getElementById("description");
  const bookingButton = document.getElementById("booking-button");

  // Установить тексты в зависимости от выбранного языка
  welcomeMessage.textContent = translations[lang].welcome;
  description.textContent = translations[lang].description;
  bookingButton.textContent = translations[lang].booking;
}


document.addEventListener("DOMContentLoaded", () => {
  const defaultLanguage = "en"; // Язык по умолчанию
  changeLanguage(defaultLanguage);
});

// Отображение кнопки, когда пользователь прокручивает страницу до низа
window.addEventListener("scroll", () => {
  const scrollToTopButton = document.getElementById("scrollToTop");

  // Проверяем, достигнут ли низ страницы
  const scrollPosition = window.scrollY + window.innerHeight; // Текущее положение + высота окна
  const documentHeight = document.documentElement.scrollHeight; // Полная высота документа

  if (scrollPosition >= documentHeight) {
      scrollToTopButton.style.display = "flex"; // Показываем кнопку
  } else {
      scrollToTopButton.style.display = "none"; // Скрываем кнопку
  }
});

// Плавная прокрутка к началу страницы
function scrollToTop() {
  window.scrollTo({
      top: 0, // Начало страницы
      behavior: "smooth" // Плавный эффект
  });
}


