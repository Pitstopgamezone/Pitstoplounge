<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Token - Pit-Stop Lounge</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Прогресс-бар -->
    <div id="progress-bar"></div>

    <!-- Навигация -->
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="token.html">Our Token</a></li>
            <li><a href="club.html">Computer Club</a></li>
            <li><a href="service.html">Pit-Stop Service</a></li>
        </ul>
    </nav>

    <h1>Our Token - PTC</h1>
    <p>Your token balance: <span id="balance">Loading...</span></p>
    <button id="claimTokens">Claim 10 PTC</button>
    <button id="exchangeTokens">Exchange 10 PTC</button>

    <script>
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

        document.getElementById('claimTokens').addEventListener('click', claimTokens);
        document.getElementById('exchangeTokens').addEventListener('click', exchangeTokens);

        // Загружаем баланс при загрузке страницы
        window.onload = fetchBalance;
    </script>
</body>
</html>
