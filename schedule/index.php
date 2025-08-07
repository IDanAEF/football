<?php 
    require '../header.php'; 

    $startTime = strtotime(date('d.m.Y'));
?>
<main class="schedule">
    <section class="home__schedule page__block">
        <div class="container">
            <h1 class="page__title">расписание</h1>
            <div class="schedule__filter">
                <div class="schedule__filter-item">
                    <div class="name text_fz24 text_ffTablon date">
                        <img src="<?=IMAGES?>filter-back.png" alt="filter-back" class="back">
                        <input type="text" placeholder="дата" class="datepicker-simple" readonly>
                        <img src="<?=IMAGES?>icons/date.svg" alt="date-icon" class="date-icon">
                    </div>
                </div>
                <div class="schedule__filter-item">
                    <div class="name text_fz24 text_ffTablon body-click-target">
                        <img src="<?=IMAGES?>filter-back.png" alt="filter-back" class="back">
                        <span>время</span>
                        <img src="<?=IMAGES?>icons/arrow-down.svg" alt="arrow-down" class="arrow">
                    </div>
                    <div class="list text_fz21 full body-click-content">
                        <div class="filled-block">
                            <div class="filled-name body-click-target global-hide">От __:__</div>
                            <div class="list text_fz21 body-click-content global-hide">
                                <?php
                                    for ($i = 0; $i <= 1410; $i += 30) {
                                        ?>
                                        <span><?=date('H:i', $startTime + $i*60)?></span>
                                        <?php
                                    }
                                ?>
                                <span>24:00</span>
                            </div>
                        </div>
                        <div class="filled-block">
                            <div class="filled-name body-click-target global-hide">До __:__</div>
                            <div class="list text_fz21 body-click-content global-hide">
                                <?php
                                    for ($i = 0; $i <= 1410; $i += 30) {
                                        ?>
                                        <span><?=date('H:i', $startTime + $i*60)?></span>
                                        <?php
                                    }
                                ?>
                                <span>24:00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="schedule__filter-item">
                    <div class="name text_fz24 text_ffTablon body-click-target global-hide">
                        <img src="<?=IMAGES?>filter-back.png" alt="filter-back" class="back">
                        <span>Лига</span>
                        <img src="<?=IMAGES?>icons/arrow-down.svg" alt="arrow-down" class="arrow">
                    </div>
                    <div class="list text_fz21 body-click-content global-hide">
                        <span>
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Национальная лига
                        </span>
                        <span class="active">
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Лига Чемпионов
                        </span>
                        <span class="active">
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Кубок Америки
                        </span>
                        <span>
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Чемпионат Мира
                        </span>
                    </div>
                </div>
                <div class="schedule__filter-item">
                    <div class="name text_fz24 text_ffTablon body-click-target global-hide">
                        <img src="<?=IMAGES?>filter-back.png" alt="filter-back" class="back">
                        <span>команда</span>
                        <img src="<?=IMAGES?>icons/arrow-down.svg" alt="arrow-down" class="arrow">
                    </div>
                    <div class="list text_fz21 body-click-content global-hide">
                        <div class="input-field schedule__filter-search">
                            <img src="<?=IMAGES?>icons/loop.svg" alt="loop">
                            <input type="text" placeholder="Поиск" class="text_fz21">
                        </div>
                        <span class="active">
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Arsenal
                        </span>
                        <span>
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Atletico
                        </span>
                        <span>
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Bayern
                        </span>
                        <span>
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Chelsea
                        </span>
                        <span class="active">
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Arsenal1
                        </span>
                        <span>
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Atletico1
                        </span>
                        <span>
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Bayern1
                        </span>
                        <span>
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Chelsea1
                        </span>
                    </div>
                </div>
                <div class="schedule__filter-item">
                    <div class="name text_fz24 text_ffTablon body-click-target global-hide">
                        <img src="<?=IMAGES?>filter-back.png" alt="filter-back" class="back">
                        <span>статус</span>
                        <img src="<?=IMAGES?>icons/arrow-down.svg" alt="arrow-down" class="arrow">
                    </div>
                    <div class="list text_fz21 body-click-content global-hide">
                        <span class="active">
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Завершён
                        </span>
                        <span>
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Идёт
                        </span>
                        <span>
                            <div class="check">
                                <img src="<?=IMAGES?>icons/check.svg" alt="check">
                            </div>
                            Ожидается
                        </span>
                    </div>
                </div>
            </div>
            <div class="home__schedule-table">
                <div class="home__schedule-row">
                    <span class="date">
                        <span>25 февраля 2026</span>
                        <span>18:30</span>
                    </span>
                    <div class="match">
                        <span>Национальная лига</span>
                        <span>1/2</span>
                    </div>
                    <div class="teams">
                        <div class="teams-item">
                            <img src="<?=IMAGES?>icons/football-icon.svg" alt="CyberLions">
                            <span>CyberLions</span>
                        </div>
                        <div class="teams-result text_fz32">4:2</div>
                        <div class="teams-item">
                            <img src="<?=IMAGES?>icons/football-icon.svg" alt="NeoForce">
                            <span>NeoForce</span>
                        </div>
                    </div>
                    <div class="status">
                        <img src="<?=IMAGES?>icons/end.svg" alt="Завершён">
                        <span>Завершён</span>
                    </div>
                </div>
                <div class="home__schedule-row">
                    <span class="date">
                        <span>15 января 2026</span>
                        <span>20:00</span>
                    </span>
                    <div class="match">
                        <span>Национальная лига</span>
                        <span>1/4</span>
                    </div>
                    <div class="teams">
                        <div class="teams-item">
                            <img src="<?=IMAGES?>icons/football-icon.svg" alt="Meta United">
                            <span>Meta United</span>
                        </div>
                        <div class="teams-result text_fz32">2:1</div>
                        <div class="teams-item">
                            <img src="<?=IMAGES?>icons/football-icon.svg" alt="Digital Boys">
                            <span>Digital Boys</span>
                        </div>
                    </div>
                    <div class="status">
                        <img src="<?=IMAGES?>icons/end.svg" alt="Завершён">
                        <span>Завершён</span>
                    </div>
                </div>
                <div class="home__schedule-row">
                    <span class="date">
                        <span>31 декабря 2025</span>
                        <span>23:59</span>
                    </span>
                    <div class="match">
                        <span>Лига Чемпионов</span>
                        <span>1/8</span>
                    </div>
                    <div class="teams">
                        <div class="teams-item">
                            <img src="<?=IMAGES?>icons/football-icon.svg" alt="Tottenham Hotspur">
                            <span>Tottenham Hotspur</span>
                        </div>
                        <div class="teams-result text_fz32">0:3</div>
                        <div class="teams-item">
                            <img src="<?=IMAGES?>icons/football-icon.svg" alt="Arsenal FC">
                            <span>Arsenal FC</span>
                        </div>
                    </div>
                    <div class="status going">
                        <img src="<?=IMAGES?>icons/going.svg" alt="Идёт">
                        <span>Идёт</span>
                    </div>
                </div>
                <div class="home__schedule-row">
                    <span class="date">
                        <span>5 февраля 2026</span>
                        <span>19:45</span>
                    </span>
                    <div class="match">
                        <span>Кубок Америки</span>
                        <span>1/8</span>
                    </div>
                    <div class="teams">
                        <div class="teams-item">
                            <img src="<?=IMAGES?>icons/football-icon.svg" alt="Flamengo">
                            <span>Flamengo</span>
                        </div>
                        <div class="teams-result text_fz32">1:1</div>
                        <div class="teams-item">
                            <img src="<?=IMAGES?>icons/football-icon.svg" alt="Corinthians">
                            <span>Corinthians</span>
                        </div>
                    </div>
                    <div class="status await">
                        <img src="<?=IMAGES?>icons/await.svg" alt="Ожидается">
                        <span>Ожидается</span>
                    </div>
                </div>
                <div class="home__schedule-row">
                    <span class="date">
                        <span>10 марта 2026</span>
                        <span>21:00</span>
                    </span>
                    <div class="match">
                        <span>Чемпионат мира</span>
                        <span>1/8</span>
                    </div>
                    <div class="teams">
                        <div class="teams-item">
                            <img src="<?=IMAGES?>icons/football-icon.svg" alt="Germany">
                            <span>Germany</span>
                        </div>
                        <div class="teams-result text_fz32">—&nbsp;:&nbsp;—</div>
                        <div class="teams-item">
                            <img src="<?=IMAGES?>icons/football-icon.svg" alt="Argentina">
                            <span>Argentina</span>
                        </div>
                    </div>
                    <div class="status await">
                        <img src="<?=IMAGES?>icons/await.svg" alt="Ожидается">
                        <span>Ожидается</span>
                    </div>
                </div>
                <div class="home__schedule-row">
                    <div class="empty text_center">
                        Нет матчей
                    </div>
                </div>
            </div>
            <button class="btn text_fz32">
                <span>показать ещё</span>
                <img src="<?=IMAGES?>btn-back-black.png" alt="btn-back">
            </button>
        </div>
    </section>
</main>
<img src="<?=IMAGES?>schedule-bg.png" alt="schedule-bg" class="page__back">
<?php require '../footer.php'; ?>