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
      languageDropdown.addEventListener('change', e => changeLanguage(e.target.value));
  }

  const scrollToTopButton = document.querySelector('.scroll-to-top');
  if (scrollToTopButton) {
      setTimeout(() => scrollToTopButton.classList.add('show'), 5000);
      scrollToTopButton.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
});

// Обновление баланса токенов
async function fetchBalance() {
  try {
      // Логика для получения баланса (заглушка)
      const balance = 100; // Пример баланса
      const balanceElement = document.getElementById('balance');
      if (balanceElement) balanceElement.textContent = `${balance} PGT`;
  } catch (error) {
      console.error('Ошибка при загрузке баланса:', error);
  }
}

// Получение токенов
async function claimTokens() {
  try {
      const response = await fetch('http://localhost:3000/claim', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) throw new Error('Claim request failed');

      const data = await response.json();
      alert(data.message);
      fetchBalance();
  } catch (error) {
      alert(`Ошибка получения токенов: ${error.message}`);
  }
}

document.getElementById('claimTokens')?.addEventListener('click', claimTokens);
document.getElementById('exchangeTokens')?.addEventListener('click', () => {
  alert('Обмен токенов пока не реализован');
});

// Перевод интерфейса
const translations = {
  en: {
      welcome: 'Welcome to Pit-Stop Lounge',
      description: 'We are a small but ambitious company located in a cozy and compact space, where every corner is designed for your enjoyment and comfort. At Pit Stop Game Zone, we believe that every moment should be special, and we strive to provide you with an exceptional experience that will be remembered only in the best possible way. And you will definitely want to visit us again and again.',
      booking: 'Online Booking'
  },
  cz: {
      welcome: 'Vítejte v Pit-Stop Lounge',
      description: 'Jsme malá, ale ambiciózní společnost sídlící v útulném a kompaktním prostoru, kde je každý kout navržen pro vaše potěšení a pohodlí. V Pit Stop Game Zone věříme, že každý okamžik by měl být výjimečný, a snažíme se vám poskytnout výjimečný zážitek, na který se bude vzpomínat jen v tom nejlepším. A určitě nás budete chtít navštívit znovu a znovu.',
      booking: 'Online Rezervace'
  },
  ru: {
      welcome: 'Добро пожаловать в Pit-Stop Lounge',
      description: 'Мы небольшая, но амбициозная компания, расположенная в уютном и компактном пространстве, где каждый уголок создан для вашего удовольствия и комфорта. В Pit Stop Game Zone мы считаем, что каждый момент должен быть особенным, и стремимся подарить вам исключительные впечатления, которые запомнятся только в лучшем виде. И вам обязательно захочется посетить нас снова и снова.',
      booking: 'Онлайн Бронирование'
  },
  uk: {
      welcome: 'Ласкаво просимо до Pit-Stop Lounge',
      description: 'Ми невелика, але амбітна компанія, розташована в затишному та компактному приміщенні, де кожен куточок створений для вашого задоволення та комфорту. У Pit Stop Game Zone ми віримо, що кожен момент має бути особливим, і ми прагнемо надати вам винятковий досвід, який запам’ятається лише найкращим чином. І ви неодмінно захочете відвідати нас знову і знову.',
      booking: 'Онлайн Бронювання'
  }
};

function changeLanguage(lang) {
  const welcomeMessage = document.getElementById('welcome-message');
  const description = document.getElementById('description');
  const bookingButton = document.getElementById('booking-button');

  if (welcomeMessage) welcomeMessage.textContent = translations[lang]?.welcome || translations.en.welcome;
  if (description) description.textContent = translations[lang]?.description || translations.en.description;
  if (bookingButton) bookingButton.textContent = translations[lang]?.booking || translations.en.booking;
}

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
  document.getElementById('document-content').innerHTML = ''; // Очищаем содержимое
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
