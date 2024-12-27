// Прогресс-бар
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = `${scrollPercent}%`;
});

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

// Загружаем баланс при загрузке страницы
window.onload = fetchBalance;
