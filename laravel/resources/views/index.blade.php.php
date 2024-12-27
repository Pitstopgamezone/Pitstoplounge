<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $pageTitle ?? 'Pit-Stop Lounge' }}</title>
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Agu+Display&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">

    <style>
        /* Общие стили для кнопок */
        .button {
            background: transparent;
            color: white;
            padding: 5px 15px;
            border: 1px solid white;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .button:hover {
            background: white;
            color: black;
        }

        /* Левый верхний блок с контактами, соцсетями и личным кабинетом */
        #header-left {
            position: fixed;
            top: 10px;
            left: 10px;
            display: flex;
            gap: 10px;
            z-index: 1000;
            opacity: 0;
            transition: opacity 1s ease;
        }

        /* Фиксированная и прозрачная верхняя панель */
        .tabs {
            position: fixed;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.5); 
            color: white;
            display: flex;
            gap: 20px;
            padding: 5px 10px;
            border-radius: 10px;
            z-index: 1000;
            opacity: 0;
            transition: opacity 1s ease;
        }

        .tab-button {
            background: transparent;
            color: #fff;
            padding: 5px 15px;
            border: 1px solid white;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .tab-button:hover {
            background: white;
            color: black;
        }

        /* Стили для выбора языка */
        #language-selector {
            position: fixed;
            top: 10px;
            right: 10px;
            display: flex;
            gap: 10px;
            opacity: 0; 
            transition: opacity 1s ease;
        }

        /* Отступ для основного контента */
        #main-content {
            padding-top: 60px; 
        }

        /* Прогресс-бар */
        #progress-bar {
            height: 5px;
            background-color: #ff6600;
            width: 0;
        }

        /* Стиль для кнопки онлайн бронирования */
        .booking-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 30px;
            font-size: 18px;
            color: white;
            background: linear-gradient(45deg, #ff6600, #ff9966, #ff6600);
            border: none;
            border-radius: 50px;
            cursor: pointer;
            z-index: 999;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .booking-button:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(255, 102, 0, 0.7);
        }

        .booking-button::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            animation: pulse 1.5s infinite ease-in-out;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 0.5;
            }
            50% {
                transform: scale(1.2);
                opacity: 0.2;
            }
            100% {
                transform: scale(1);
                opacity: 0.5;
            }
        }
    </style>
</head>
<body>

    <!-- Прогресс-бар -->
    <div id="progress-bar"></div>

    <!-- Левый верхний блок (контакты, соцсети, личный кабинет) -->
    <div id="header-left">
        <button class="button" onclick="showLoginModal()">Login</button>
        <button class="button" onclick="showContactModal()">Contact</button>
        <button class="button" onclick="showSocialModal()">Socials</button>
    </div>

    <!-- Выбор языка -->
    <div id="language-selector">
        @foreach(['en', 'cz', 'ru', 'uk'] as $lang)
            <button onclick="changeLanguage('{{ $lang }}')" class="button">{{ strtoupper($lang) }}</button>
        @endforeach
    </div>

    <!-- Неоновая заставка -->
    <div id="neon-text-container">
        <h1 id="neon-text">
            @foreach(str_split('Pit Stop Game Zone') as $letter)
                <span class="neon-letter">{{ $letter }}</span>
            @endforeach
        </h1>
    </div>

    <!-- Основной контент -->
    <div id="main-content" style="display: none;">
        <!-- Навигация (вкладки) -->
        <div class="tabs">
            <button class="tab-button" onclick="showTab('club')">Computer Club</button>
            <button class="tab-button" onclick="showTab('service')">Pit-Stop Service</button>
            <button class="tab-button" onclick="showTab('token')">Token</button>
        </div>

        <!-- Контент вкладок -->
        <div id="club" class="tab-content">
            <h2>Computer Club</h2>
            <p id="club-description">{{ $clubDescription ?? 'Information about the computer club, photos, contact details, and map.' }}</p>
            <div style="height: 1500px; background-color: #f4f4f4; display: flex; justify-content: center; align-items: center;">
                <img src="{{ asset('images/image01.jpg') }}" alt="Pit Stop Image" style="max-width: 100%; height: auto; border-radius: 10px;">
            </div>
        </div>
        <div id="service" class="tab-content">
            <h2>Pit-Stop Service</h2>
            <p id="service-description">{{ $serviceDescription ?? 'Details about bike and scooter repair and rental services.' }}</p>
            <p>Additional text and content for testing scrolling.</p>
            <div style="height: 1500px; background-color: #e0e0e0;"></div>
        </div>
        <div id="token" class="tab-content">
            <h2>Our Token</h2>
            <p>Your token balance: <span id="balance">{{ $tokenBalance ?? 'Loading...' }}</span></p>
            <button id="exchangeTokens">Exchange 10 PTC</button>
            <p>Additional text and content for testing scrolling.</p>
            <div style="height: 1500px; background-color: #c8c8c8;"></div>
        </div>
    </div>

    <!-- Кнопка онлайн бронирования -->
    <button class="booking-button" onclick="window.location.href='https://pitstoplounge.booking.enes.tech/'">
        Онлайн резервирование
    </button>

    <script>
        // Прогресс-бар при скролле
        window.onscroll = function() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            document.getElementById('progress-bar').style.width = scrollProgress + '%';
        };

        // Показать вкладку
        function showTab(tabId) {
            const tabs = document.querySelectorAll('.tab-content');
            tabs.forEach(tab => tab.style.display = 'none');
            document.getElementById(tabId).style.display = 'block';
        }

        // Показать основной контент после анимации
        window.onload = function() {
            setTimeout(function() {
                document.getElementById('neon-text-container').style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
                showTab('club');
                // Показать кнопки после заставки
                document.getElementById('header-left').style.opacity = 1;
                document.querySelector('.tabs').style.opacity = 1;
                document.getElementById('language-selector').style.opacity = 1;
            }, 4000); 
        };

        // Применение изменений для языков
        function changeLanguage(language) {
            const translations = {
                en: {
                    "club-description": "Information about the computer club, photos, contact details, and map.",
                    "service-description": "Details about bike and scooter repair and rental services."
                },
                ru: {
                    "club-description": "Информация о компьютерном клубе, фотографии, контактные данные и карта.",
                    "service-description": "Подробности о ремонте и аренде велосипедов и самокатов."
                },
                uk: {
                    "club-description": "Інформація про комп'ютерний клуб, фотографії, контактні дані та карта.",
                    "service-description": "Деталі про ремонт і оренду велосипедів та самокатів."
                },
                cz: {
                    "club-description": "Informace o počítačovém klubu, fotky, kontaktní údaje a mapa.",
                    "service-description": "Podrobnosti o opravách a pronájmu bicyklů a koloběžek."
                }
            };

            const elementsToTranslate = document.querySelectorAll('[id]');

            elementsToTranslate.forEach(element => {
                const id = element.id;
                if (translations[language] && translations[language][id]) {
                    element.innerText = translations[language][id];
                }
            });
        }
    </script>
</body>
</html>
