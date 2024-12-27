<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Computer Club - Pit-Stop Lounge</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Прогресс-бар -->
    <div id="progress-bar"></div>

    <header>
        <h1>Welcome to the Pit-Stop Computer Club</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="token.html">About Our Token</a></li>
                <li><a href="service.html">Pit-Stop Service</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <h2>About the Club</h2>
        <p>Our gaming club is the perfect place for gamers! Enjoy the latest games on PC and PlayStation.</p>
        <p>Contact us: <strong>123-456-7890</strong></p>
        <p>Find us on the map below:</p>
        <!-- Вставьте карту -->
        <p><a href="https://www.senet.com" target="_blank">Book a session on Senet</a></p>
    </section>

    <script>
        // Прогресс-бар
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            document.getElementById('progress-bar').style.width = `${scrollPercent}%`;
        });
    </script>
</body>
</html>
