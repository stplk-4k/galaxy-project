<template>
    <div class="main">
        <div class="container">
            <h1>Галактика цифровых решений</h1>
            <div class="swiper-container">
                <div class="main-row-space">
                <swiper :options="swiperOptions" ref="swiperRef" @swiper="setSwiperRef">
                    <swiper-slide>
                            <div class="row align-items-start main-row">
                                <div class="col-sm-6 main-text">
                                    <p>
                                        Мы занимаемся разработкой программного обеспечения уже более 35 лет и входим в
                                        число
                                        лидеров на ИТ-рынке.
                                    </p>
                                    <router-link to="/about">
                                        <button type="button" class="btn btn-primary">Подробнее</button>
                                    </router-link>
                                </div>
                                <div class="col-sm-6">
                                    <a>
                                        <img class="main-img" src="@/assets/img/bg_main.jpg" />
                                    </a>
                                </div>
                            </div>
                    </swiper-slide>

                    <swiper-slide>
                            <div class="row main-row">
                                <div class="col-sm-6 main-text">
                                    <h3>Мощь. Производительность. Функциональность.</h3>
                                    <p>
                                        "Галактика ERP" помогает эффективно решать текущие и стратегические
                                        управленческие задачи
                                        современного предприятия.
                                    </p>
                                    <router-link to="/product/6">
                                        <button type="button" class="btn btn-primary">Подробнее</button>
                                    </router-link>
                                </div>
                                <div class="col-sm-6">
                                    <a>
                                        <img class="main-img" src="@/assets/img/bg_erp.jpg" />
                                    </a>
                                </div>
                            </div>
                    </swiper-slide>

                    <swiper-slide>
                            <div class="row main-row">
                                <div class="col-sm-6 main-text">
                                    <h3>Постройте эффективное производство</h3>
                                    <p>
                                        "Галактика АММ" помогает построить прибыльный и эффективный производственный
                                        процесс на
                                        любом предприятии.
                                    </p>
                                    <router-link to="/product/1">
                                        <button type="button" class="btn btn-primary">Подробнее</button>
                                    </router-link>
                                </div>
                                <div class="col-sm-6">
                                    <a>
                                        <img class="main-img" src="@/assets/img/bg_amm.jpg" />
                                    </a>
                                </div>
                            </div>
                    </swiper-slide>
                

                </swiper>
            </div>
                <div class="swiper-button-prev swiper-button-prev-home" @click="slidePrev"></div>
                <div class="swiper-button-next swiper-button-next-home" @click="slideNext"></div>

            </div> 
        </div> 
    </div>
</template>

<script>

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


export default {
    name: 'HomePage',
    components: { Swiper, SwiperSlide },
    setup() {
        const swiperRef = ref(null);
        const swiperInstance = ref(null);


        const swiperOptions = {
            loop: true, 
            autoplay: {
                delay: 3000, 
                disableOnInteraction: false, 
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };

        function setSwiperRef(swiper) {
            swiperInstance.value = swiper;
        }

        function slidePrev() {
            if (swiperInstance.value) {
                swiperInstance.value.slidePrev();
            }
        }

        function slideNext() {
            if (swiperInstance.value) {
                swiperInstance.value.slideNext();
            }
        }

        return {
            swiperRef,
            swiperOptions,
            slidePrev,
            slideNext,
            setSwiperRef,
        };
    },
};
</script>
