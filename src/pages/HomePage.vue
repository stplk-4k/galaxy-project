<template>
    <div class="main">
        <div class="container">
            <h1>Галактика цифровых решений</h1>
            <div class="main-row-space">
                <div class="row align-items-start main-row">
                    <div class="col-sm-6 main-text">
                        <p>
                            Мы занимаемся разработкой программиного обеспечения уже более 35 лет и входим в число
                            лидеров на
                            ИТ-рынке
                        </p>
                        <router-link to="/about">
                            <button type="button" class="btn btn-primary">Подробнее</button>
                        </router-link>
                        
                    </div>
                    <div class="col-sm-6">
                        <a>
                            <img class="main-img" src="@/assets/img/bg_main.jpg">
                        </a>
                    </div>
                </div>
            </div>
            <div class="main-row-space">
                <div class="row main-row">
                    <div class="col-sm-6 main-text">
                        <h3>Мощь. Производительность. Функциональность.</h3>
                        <p>
                            "Галактика ERP" помогает эффективно решать текущие и стратегические управленческие задачи
                            современного предприятия
                        </p>
                        <router-link to="/product-erp">
                            <button type="button" class="btn btn-primary">Подробнее</button>
                        </router-link>

                    </div>
                    <div class="col-sm-6">
                        <a>
                            <img class="main-img" src="@/assets/img/bg_erp.jpg">
                        </a>
                    </div>
                </div>
            </div>
            <div class="main-row-space">
                <div class="row main-row">
                    <div class="col-sm-6 main-text">
                        <h3>Постройте эффективное производство</h3>
                        <p>
                            "Галактика АММ" помогает построить прибыльный и эффективный производственный процесс на
                            любом предприятии
                        </p>
                        <router-link to="/product-amm">
                            <button type="button" class="btn btn-primary">Подробнее</button>
                        </router-link>
                        
                    </div>
                    <div class="col-sm-6">
                        <a>
                            <img class="main-img" src="@/assets/img/bg_amm.jpg">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    meta: {
        title: 'Корпорация «Галактика»'
    },
};
</script>