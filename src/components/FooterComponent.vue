<template>
    <nav>
        <div id="footer">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-4">
                        <img class="logo-header p-3" src="../assets/img/logo-blue.png" alt="Логотип">
                    </div>
                    <div class="col-sm-4">
                        <ul class="sidebar-ul footer-ul">
                            <li>
                                <router-link to="/">Корпорация «Галактика»</router-link>
                            </li>
                            <li>
                                <a href="mailto:market@galaktika.ru">market@galaktika.ru</a>
                                
                            </li>
                            <li>
                                <a href="tel:+7 495 252-02-55">+7 495 252-02-55</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-4 ">
                        <ul class="sidebar-ul footer-ul">
                            <li>
                                <router-link to="/privacy">Политика конфиденциальности</router-link>
                            </li>
                            <li><a href="mailto:support@galaktika.ru">support@galaktika.ru</a></li>
                            <li><a href="tel:+7 495 252-02-48">+7 495 252-02-48</a></li>
                        </ul>
                    </div>
                </div>
                <div class="row footer-text">
                        <p>© 2024 Корпорация «Галактика». Все права защищены</p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
</script>
