// Прогресс-бар
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Получаем текущую позицию прокрутки
    const docHeight = document.body.scrollHeight - window.innerHeight; // Высота документа за вычетом высоты окна
    const scrollPercent = (scrollTop / docHeight) * 100; // Вычисляем процент прокрутки
    const progressBar = document.getElementById('progress-bar'); // Находим элемент прогресс-бара
    if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`; // Устанавливаем ширину прогресс-бара
    }
  });
  
  // Показать вкладку
  function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content'); // Находим все вкладки
    const buttons = document.querySelectorAll('.tab-button'); // Находим все кнопки вкладок
  
    tabs.forEach(tab => tab.style.display = (tab.id === tabId ? 'block' : 'none')); // Показываем выбранную вкладку, скрываем остальные
    buttons.forEach(button => {
        button.classList.toggle('active', button.classList.contains(`${tabId}-button`)); // Активируем кнопку выбранной вкладки
    });
  }
  
  // Инициализация контента
  function initializeContent() {
    const neonTextContainer = document.getElementById('neon-text-container'); // Находим контейнер с неоновым текстом
    const delayedElements = document.querySelectorAll('.hidden'); // Находим все скрытые элементы
  
    setTimeout(() => {
        if (neonTextContainer) neonTextContainer.style.display = 'none'; // Скрываем неоновый текст
  
        delayedElements.forEach(element => {
            element.classList.remove('hidden'); // Показываем скрытые элементы
            element.classList.add('visible'); // Добавляем класс видимости
        });
  
        const mainContent = document.getElementById('main-content'); // Находим основной контент
        if (mainContent) mainContent.style.display = 'block'; // Показываем основной контент
  
        [
            document.getElementById('header-left'),
            document.querySelector('.tabs'),
            document.getElementById('language-selector')
        ].forEach(el => {
            if (el) el.style.opacity = 1; // Устанавливаем видимость элементов
        });
  
        fetchBalance(); // Вызываем функцию для получения баланса (предполагается, что она определена где-то еще)
    }, 3000); // Задержка в 3 секунды
  
    setTimeout(() => {
        const footerInfo = document.getElementById('footer-info'); // Находим информацию в подвале
        if (footerInfo) footerInfo.style.opacity = 1; // Устанавливаем видимость информации в подвале
  
        const bookingButton = document.querySelector('.booking-button'); // Находим кнопку бронирования
        if (bookingButton) bookingButton.style.opacity = 1; // Устанавливаем видимость кнопки бронирования
    }, 3000); // Задержка в 3 секунды
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showTab('club'); // Показываем вкладку "club" при загрузке страницы
    initializeContent(); // Инициализируем контент
  
    const scrollToTopButton = document.querySelector('.scroll-to-top'); // Находим кнопку прокрутки вверх
    if (scrollToTopButton) {
        setTimeout(() => scrollToTopButton.classList.add('show'), 5000); // Показываем кнопку через 5 секунд
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокручиваем страницу вверх при клике
        });
    }
  
    // Установить правильную иконку языка при загрузке страницы
    setInitialLanguageIcon();
  
    // Проверить, нужно ли показывать заставку
    checkAndShowIntro();
  });
  
  // Функция для изменения языка
  function changeLanguage(language) {
    if (language === 'cz') {
        window.location.href = 'index-cz.html'; // Перенаправляем на чешскую версию
    } else if (language === 'en') {
        window.location.href = 'index.html'; // Перенаправляем на английскую версию
    } else if (language === 'cz-service') {
        window.location.href = 'pit-stop-cz.html'; // Перенаправляем на чешскую версию сервиса
    } else if (language === 'en-service') {
        window.location.href = 'pit-stop.html'; // Перенаправляем на английскую версию сервиса
    } else if (language === 'uk') {
        window.location.href = 'index-ua.html'; // Перенаправляем на украинскую версию
    } else if (language === 'ru') {
        window.location.href = 'index-ru.html'; // Перенаправляем на русскую версию
    } else if (language === 'uk-service') {
        window.location.href = 'pit-stop-ua.html'; // Перенаправляем на украинскую версию сервиса
    } else if (language === 'ru-service') {
        window.location.href = 'pit-stop-ru.html'; // Перенаправляем на русскую версию сервиса
    }
  }
  
  // Функция для установки начальной иконки языка при загрузке страницы
  function setInitialLanguageIcon() {
    const languageDropdown = document.getElementById('language-dropdown'); // Находим выпадающий список языков
    const currentUrl = window.location.href; // Получаем текущий URL
  
    if (currentUrl.includes('index-cz.html')) {
      languageDropdown.value = 'cz'; // Устанавливаем значение выпадающего списка на чешский
  } else if (currentUrl.includes('index-ua.html')) {
      languageDropdown.value = 'uk'; // Устанавливаем значение выпадающего списка на украинский
  } else if (currentUrl.includes('index-ru.html')) {
      languageDropdown.value = 'ru'; // Устанавливаем значение выпадающего списка на русский
  } else if (currentUrl.includes('index.html')) {
      languageDropdown.value = 'en'; // Устанавливаем значение выпадающего списка на английский
  } else if (currentUrl.includes('pit-stop-cz.html')) {
      languageDropdown.value = 'cz-service'; // Устанавливаем значение выпадающего списка на чешский сервис
  } else if (currentUrl.includes('pit-stop.html')) {
      languageDropdown.value = 'en-service'; // Устанавливаем значение выпадающего списка на английский сервис
  } else if (currentUrl.includes('pit-stop-ua.html')) {
      languageDropdown.value = 'uk-service'; // Устанавливаем значение выпадающего списка на украинский сервис
  } else if (currentUrl.includes('pit-stop-ru.html')) {
      languageDropdown.value = 'ru-service'; // Устанавливаем значение выпадающего списка на русский сервис
  }
  }
  
  // Функция для проверки и показа заставки
  function checkAndShowIntro() {
      const hasSeenIntro = localStorage.getItem('hasSeenIntro'); // Проверяем, видел ли пользователь заставку
      const neonTextContainer = document.getElementById('neon-text-container'); // Находим контейнер с неоновым текстом
      const mainContent = document.getElementById('main-content'); // Находим основной контент
    
      if (!hasSeenIntro) {
          // Показываем заставку
          if (neonTextContainer) neonTextContainer.style.display = 'block';
          if (mainContent) mainContent.style.display = 'none';
    
          setTimeout(() => {
              if (neonTextContainer) neonTextContainer.style.display = 'none';
              if (mainContent) mainContent.style.display = 'block';
              localStorage.setItem('hasSeenIntro', 'true'); // Сохраняем информацию о том, что пользователь видел заставку
          }, 3000); // Задержка для показа заставки
      } else {
          // Скрываем заставку и показываем контент сразу
          if (neonTextContainer) neonTextContainer.style.display = 'none';
          if (mainContent) mainContent.style.display = 'block';
      }
  }
  
 //  document.addEventListener("DOMContentLoaded", function () {
  //   const userLang = navigator.language || navigator.userLanguage; // Определяем язык браузера
   //  let targetPage = "index.html"; // По умолчанию английская версия
  
   //  if (userLang.startsWith("cs")) { // Чешский
   //      targetPage = "index-cs.html";
   //  } else if (userLang.startsWith("ru")) { // Русский
   //      targetPage = "index-ru.html";
   //  } else if (userLang.startsWith("uk")) { // Украинский
   //      targetPage = "index-ua.html";
   //  }
  
    // Проверяем, чтобы не делать редирект повторно
   //  if (window.location.pathname === "/index.html" && targetPage !== "index.html") {
   //      window.location.replace(targetPage); // Перенаправляем на нужную версию страницы
   //  }
 //  });
  
  // Tooltip для адреса
  function initializeTooltip() {
    const addressLink = document.querySelector('.address-link'); // Находим ссылку на адрес
    const tooltip = document.querySelector('.tooltip'); // Находим тултип
  
    if (addressLink && tooltip) {
        addressLink.addEventListener('mouseenter', () => {
            tooltip.style.display = 'block'; // Показываем тултип при наведении
            tooltip.style.opacity = '1'; // Устанавливаем прозрачность тултипа
        });
  
        addressLink.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0'; // Скрываем тултип при уходе курсора
            setTimeout(() => {
                tooltip.style.display = 'none'; // Полностью скрываем тултип через 300 мс
            }, 300);
        });
    }
  }
  
  document.addEventListener('DOMContentLoaded', initializeTooltip); // Инициализируем тултип при загрузке страницы
  
  // Открытие модального окна
  function openModal() {
    document.getElementById('documents-modal').style.display = 'block'; // Показываем модальное окно
  }
  
  // Закрытие модального окна
  function closeModal() {
    document.getElementById('documents-modal').style.display = 'none'; // Скрываем модальное окно
  }
  
  // Загрузка текстового документа в модальное окно
  function loadDocument(filePath) {
    fetch(filePath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Could not load document: ${response.statusText}`); // Обрабатываем ошибку загрузки
            }
            return response.text();
        })
        .then((text) => {
            document.getElementById('document-content').innerHTML = `<pre>${text}</pre>`; // Отображаем текст документа
        })
        .catch((error) => {
            document.getElementById('document-content').innerHTML = `<p>Error: ${error.message}</p>`; // Отображаем сообщение об ошибке
        });
  }
  
  // Закрытие модального окна при клике вне его
  window.onclick = function (event) {
    const modal = document.getElementById('documents-modal');
    if (event.target === modal) {
        closeModal(); // Закрываем модальное окно при клике вне его
    }
  };
  
  // Показ кнопки прокрутки вверх после прокрутки 50% страницы
  window.addEventListener('scroll', () => {
      const scrollToTopButton = document.getElementById('scrollToTop'); // Находим кнопку прокрутки вверх
      const scrollThreshold = document.documentElement.scrollHeight / 2; // Устанавливаем порог прокрутки
  
      if (window.scrollY > scrollThreshold) {
          scrollToTopButton.classList.add('show'); // Показываем кнопку при достижении порога
      } else {
          scrollToTopButton.classList.remove('show'); // Скрываем кнопку, если прокрутка меньше порога
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
      const marquee = document.querySelector('.marquee'); // Находим элемент бегущей строки
    
      marquee.addEventListener('click', () => {
        marquee.classList.toggle('paused'); // Останавливаем или запускаем бегущую строку при клике
      });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
      const carousel = document.querySelector(".image-carousel"); // Находим карусель изображений
      const prevButton = document.querySelector(".carousel-control.prev"); // Находим кнопку предыдущего изображения
      const nextButton = document.querySelector(".carousel-control.next"); // Находим кнопку следующего изображения
  
      let scrollAmount = 0;
  
      function scrollCarousel(direction) {
          const containerWidth = carousel.offsetWidth; // Получаем ширину контейнера карусели
          scrollAmount += direction * containerWidth * 0.5; // Прокручиваем на 50% ширины контейнера
          carousel.scrollTo({
              left: scrollAmount,
              behavior: "smooth", // Плавная прокрутка
          });
      }
  
      prevButton.addEventListener("click", () => scrollCarousel(-1)); // Прокрутка назад при клике на кнопку
      nextButton.addEventListener("click", () => scrollCarousel(1)); // Прокрутка вперед при клике на кнопку
  });
  
  // Бургер-меню
  document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger-menu-button'); // Находим кнопку бургер-меню
    const burgerMenu = document.querySelector('.burger-menu'); // Находим бургер-меню
    const closeButton = document.querySelector('.close-menu'); // Находим кнопку закрытия меню
    const languageDropdown = document.getElementById('language-dropdown'); // Находим выпадающий список языков
    const burgerContainer = document.querySelector('.burger-menu-container'); // Находим контейнер бургер-меню
  
    if (burgerContainer) {
        // Показ меню через 4 секунды
        setTimeout(() => {
            burgerContainer.classList.add('visible');
        }, 3000);
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
      const newsCalendar = document.getElementById("news-calendar"); // Находим календарь новостей
    
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


  document.addEventListener('DOMContentLoaded', function() {
    const viewer = new PhotoSphereViewer.Viewer({
        container: document.querySelector('#panorama'),
        panorama: 'images/panorama.jpg',
        navbar: [
            'autorotate',
            'zoom',
            'fullscreen'
        ],
        autorotateDelay: 3000,
        mousewheel: true,
        touchmoveTwoFingers: true
    });
});