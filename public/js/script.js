// Прогресс-бар
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
  }
});

// Показать вкладку
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => tab.style.display = (tab.id === tabId ? 'block' : 'none'));
  buttons.forEach(button => {
      button.classList.toggle('active', button.classList.contains(`${tabId}-button`));
  });
}

// Инициализация контента
function initializeContent() {
  const neonTextContainer = document.getElementById('neon-text-container');
  const delayedElements = document.querySelectorAll('.hidden');

  setTimeout(() => {
      if (neonTextContainer) neonTextContainer.style.display = 'none';

      delayedElements.forEach(element => {
          element.classList.remove('hidden');
          element.classList.add('visible');
      });

      const mainContent = document.getElementById('main-content');
      if (mainContent) mainContent.style.display = 'block';

      [
          document.getElementById('header-left'),
          document.querySelector('.tabs'),
          document.getElementById('language-selector')
      ].forEach(el => {
          if (el) el.style.opacity = 1;
      });

      fetchBalance();
  }, 3000);

  setTimeout(() => {
      const footerInfo = document.getElementById('footer-info');
      if (footerInfo) footerInfo.style.opacity = 1;

      const bookingButton = document.querySelector('.booking-button');
      if (bookingButton) bookingButton.style.opacity = 1;
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  showTab('club');
  initializeContent();

  const languageDropdown = document.getElementById('language-dropdown');
  if (languageDropdown) {
      languageDropdown.addEventListener('change', e => {
          changeLanguage(e.target.value);
      });
  }

  const scrollToTopButton = document.querySelector('.scroll-to-top');
  if (scrollToTopButton) {
      setTimeout(() => scrollToTopButton.classList.add('show'), 5000);
      scrollToTopButton.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  // Установить правильную иконку языка при загрузке страницы
  setInitialLanguageIcon();
});


// Функция для изменения языка
function changeLanguage(language) {
  if (language === 'cz') {
      window.location.href = 'index-cz.html';
  } else if (language === 'en') {
      window.location.href = 'index.html';
  } else if (language === 'cz-service') {
      window.location.href = 'pit-stop-cz.html';
  } else if (language === 'en-service') {
      window.location.href = 'pit-stop.html';
  } else if (language === 'uk') {
      window.location.href = 'index-ua.html';
  } else if (language === 'ru') {
      window.location.href = 'index-ru.html';
  } else if (language === 'uk-service') {
      window.location.href = 'pit-stop-ua.html';
  } else if (language === 'ru-service') {
      window.location.href = 'pit-stop-ru.html';
  }
}

// Функция для установки начальной иконки языка при загрузке страницы
function setInitialLanguageIcon() {
  const languageDropdown = document.getElementById('language-dropdown');
  const currentUrl = window.location.href;

  if (currentUrl.includes('index-cz.html')) {
      languageDropdown.value = 'cz';
  } else if (currentUrl.includes('index-ua.html')) {
      languageDropdown.value = 'uk';
  } else if (currentUrl.includes('index-ru.html')) {
      languageDropdown.value = 'ru';
  } else {
      languageDropdown.value = 'en';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const userLang = navigator.language || navigator.userLanguage; // Определяем язык браузера
  let targetPage = "index.html"; // По умолчанию английская версия

  if (userLang.startsWith("cs")) { // Чешский
      targetPage = "index-cs.html";
  } else if (userLang.startsWith("ru")) { // Русский
      targetPage = "index-ru.html";
  } else if (userLang.startsWith("uk")) { // Украинский
      targetPage = "index-ua.html";
  }

  // Проверяем, чтобы не делать редирект повторно
  if (window.location.pathname === "/index.html" && targetPage !== "index.html") {
      window.location.replace(targetPage);
  }
});



// Tooltip для адреса
function initializeTooltip() {
  const addressLink = document.querySelector('.address-link');
  const tooltip = document.querySelector('.tooltip');

  if (addressLink && tooltip) {
      addressLink.addEventListener('mouseenter', () => {
          tooltip.style.display = 'block';
          tooltip.style.opacity = '1';
      });

      addressLink.addEventListener('mouseleave', () => {
          tooltip.style.opacity = '0';
          setTimeout(() => {
              tooltip.style.display = 'none';
          }, 300);
      });
  }
}

document.addEventListener('DOMContentLoaded', initializeTooltip);

// Открытие модального окна
function openModal() {
  document.getElementById('documents-modal').style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
  document.getElementById('documents-modal').style.display = 'none';
}
// Загрузка текстового документа в модальное окно
function loadDocument(filePath) {
  fetch(filePath)
      .then((response) => {
          if (!response.ok) {
              throw new Error(`Could not load document: ${response.statusText}`);
          }
          return response.text();
      })
      .then((text) => {
          document.getElementById('document-content').innerHTML = `<pre>${text}</pre>`;
      })
      .catch((error) => {
          document.getElementById('document-content').innerHTML = `<p>Error: ${error.message}</p>`;
      });
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
  const modal = document.getElementById('documents-modal');
  if (event.target === modal) {
      closeModal();
  }
};

// Показ кнопки прокрутки вверх после прокрутки 50% страницы
window.addEventListener('scroll', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');
    const scrollThreshold = document.documentElement.scrollHeight / 2;

    if (window.scrollY > scrollThreshold) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Функция для прокрутки вверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const marquee = document.querySelector('.marquee');
  
    marquee.addEventListener('click', () => {
      marquee.classList.toggle('paused');
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".image-carousel");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");

    let scrollAmount = 0;

    function scrollCarousel(direction) {
        const containerWidth = carousel.offsetWidth;
        scrollAmount += direction * containerWidth * 0.5; // Прокрутка на 50% ширины контейнера
        carousel.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    }

    prevButton.addEventListener("click", () => scrollCarousel(-1));
    nextButton.addEventListener("click", () => scrollCarousel(1));
});

// Бургер-меню
document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.burger-menu-button');
  const burgerMenu = document.querySelector('.burger-menu');
  const closeButton = document.querySelector('.close-menu');
  const languageDropdown = document.getElementById('language-dropdown');
  const burgerContainer = document.querySelector('.burger-menu-container');

  if (burgerContainer) {
      // Показ меню через 4 секунды
      setTimeout(() => {
          burgerContainer.classList.add('visible');
      }, 4000);
  }

  if (burgerButton && burgerMenu) {
      // Открытие меню
      burgerButton.addEventListener('click', () => {
          burgerMenu.classList.toggle('open');
      });

      // Закрытие меню через кнопку "×"
      closeButton.addEventListener('click', () => {
          burgerMenu.classList.remove('open');
      });

      // Закрытие меню при клике на ссылку
      burgerMenu.addEventListener('click', (event) => {
          if (event.target.tagName === 'A') {
              burgerMenu.classList.remove('open');
          }
      });
  }

  // Смена языка
  if (languageDropdown) {
      languageDropdown.addEventListener('change', (event) => {
          const selectedLanguage = event.target.value;
          changeLanguage(selectedLanguage); // Функция changeLanguage уже должна быть у вас
      });
  }
});

// Падение блока с новостями
document.addEventListener("DOMContentLoaded", () => {
    const newsCalendar = document.getElementById("news-calendar");
  
    const handleScroll = () => {
      const rect = newsCalendar.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        newsCalendar.classList.add("visible"); // Добавляем класс для анимации
        window.removeEventListener("scroll", handleScroll); // Удаляем обработчик после активации
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  });
  


// Функция для установки координат для neon-spray
function setNeonCoordinates(element, top, left) {
    element.style.top = top + '%';
    element.style.left = left + '%';
  }
  
  // Функция для скрытия или отображения элементов на мобильных устройствах
  function toggleNeonVisibility() {
    const neonElements = document.querySelectorAll('.neon-spray');
  
    if (window.innerWidth <= 768) {  // Если экран — мобильное устройство
      neonElements.forEach(element => {
        element.classList.add('hidden');  // Добавляем класс 'hidden', чтобы скрыть элемент
      });
    } else {
      neonElements.forEach(element => {
        element.classList.remove('hidden');  // Убираем класс 'hidden', чтобы показать элемент
      });
    }
  }
  
  // Вызов функции при загрузке страницы и при изменении размера окна
  window.addEventListener('load', toggleNeonVisibility);
  window.addEventListener('resize', toggleNeonVisibility);
  
  
  function updateClock() {
    const now = new Date().toLocaleString("en-US", { timeZone: "Europe/Prague" });
    const pragueTime = new Date(now);

    const hours = pragueTime.getHours();
    const minutes = pragueTime.getMinutes();
    const seconds = pragueTime.getSeconds();

    const hourDegrees = (360 / 12) * (hours % 12) + (360 / 12) * (minutes / 60); // Часовая стрелка
    const minuteDegrees = (360 / 60) * minutes; // Минутная стрелка
    const secondDegrees = (360 / 60) * seconds; // Секундная стрелка

    // Устанавливаем вращение стрелок
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`;
}

function updateClubStatus() {
    const now = new Date().toLocaleString("en-US", { timeZone: "Europe/Prague" });
    const pragueTime = new Date(now);
    const hours = pragueTime.getHours();
    const statusText = document.getElementById('status-text');

    // Часы работы клуба: 10:00 - 22:00
    if (hours >= 10 && hours < 22) {
        statusText.textContent = 'Open';
        statusText.style.color = '#00ff00';
    } else {
        statusText.textContent = 'Closed';
        statusText.style.color = '#ff0000';
    }
}

// Обновляем часы и статус каждую секунду
setInterval(() => {
    updateClock();
    updateClubStatus();
}, 1000);

// Инициализация
updateClock();
updateClubStatus();

