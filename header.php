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

    <link rel="stylesheet" href="/assets/css/style.min.css">
    <link rel="stylesheet" href="/custom.css">
</head>
<body>
    <div class="page-wrap">
        <header class="header">
            <div class="container">
                <div class="header__wrap text_fz32 text_fw900 text_ffTablon">
                    <img src="<?=IMAGES?>header-back.png" alt="header-back" class="back">
                    <nav class="header__nav text_upper">
                        <ul>
                            <li>
                                <a href="/news/" class="no-hover<?=CLEAR_PATH == '/news/' ? ' active' : ''?>">новости</a>
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
        </header>