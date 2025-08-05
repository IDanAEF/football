<?php
    define('IMAGES', '/assets/images/');
    define('CLEAR_PATH', preg_replace('/\\?.*/', '', $_SERVER['REQUEST_URI']));
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Футбол</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/assets/css/air-datepicker.css">
    <link rel="stylesheet" href="/assets/css/style.min.css">
    <link rel="stylesheet" href="/custom.css">

    <link rel="icon" href="<?=IMAGES?>favicon.png">
    <link rel="apple-touch-icon" href="<?=IMAGES?>favicon.png" >
    <meta name="msapplication-TileImage" content="<?=IMAGES?>favicon.png" >
</head>
<body>
    <div class="page-wrap">
        <header class="header">
            <div class="container">
                <div class="header__wrap text_fz24 text_fw900 text_ffTablon">
                    <picture>
                        <source srcset="<?=IMAGES?>header-back-mob2.png" media="(max-width: 370px)">
                        <source srcset="<?=IMAGES?>header-back-mob.png" media="(max-width: 576px)">
                        <img src="<?=IMAGES?>header-back.png" alt="header-back" class="back">
                    </picture>
                    <img src="<?=IMAGES?>icons/menu.svg" alt="Меню" class="header__burger">
                    <nav class="header__nav text_upper">
                        <ul>
                            <li>
                                <a href="/" class="no-hover<?=CLEAR_PATH == '/' ? ' active' : ''?>">Главная</a>
                            </li>
                            <li>
                                <a href="/#news" class="no-hover">новости</a>
                            </li>
                            <li>
                                <a href="/schedule/" class="no-hover<?=CLEAR_PATH == '/schedule/' ? ' active' : ''?>">расписание</a>
                            </li>
                            <li>
                                <a href="/rules/" class="no-hover<?=CLEAR_PATH == '/rules/' ? ' active' : ''?>">правила и условия</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="header__links">
                        <a href="" target="_blank">
                            <img src="<?=IMAGES?>icons/twitch-color.svg" alt="Twitch">
                        </a>
                        <a href="" target="_blank">
                            <img src="<?=IMAGES?>icons/youtube-color.svg" alt="YouTube">
                        </a>
                    </div>
                </div>
            </div>
            <div class="header__mobile">
                <img src="<?=IMAGES?>icons/close.svg" alt="close" class="header__mobile-close">
                <div class="page__title text_fz72 text_ffTablon text_fw900 text_center">
                    МЕНЮ
                </div>
                <nav class="header__mobile-nav text_fz48 text_ffTablon text_fw900 text_upper">
                    <ul>
                        <li>
                            <a href="/">Главная</a>
                        </li>
                        <li>
                            <a href="/#news">новости</a>
                        </li>
                        <li>
                            <a href="/schedule/">расписание</a>
                        </li>
                        <li>
                            <a href="/rules/">правила и условия</a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <img src="<?=IMAGES?>icons/twitch.svg" alt="twitch">
                                twitch
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <img src="<?=IMAGES?>icons/youtube.svg" alt="youtube">
                                youtube
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>