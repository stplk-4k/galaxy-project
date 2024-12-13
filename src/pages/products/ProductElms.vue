<template>
  <div class="product">
    <div class="container">
      <h2 class="product-h2">Подробное описание услуги</h2>
      <div class="row product-row">
        <div class="col-9">
          <h3 class="product-h-name">{{ product.name }}</h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">{{ product.short_description }}</p>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>{{ product.full_description }}</p>
          </div>

          <h3 class="product-h">Цена</h3>
          <div class="product-detailed">
            <p>{{ product.price }} руб.</p>
          </div>

          <button type="button" class="btn btn-primary">Купить</button>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>
        </div>
        <div class="col-3">
          <img :src="getImagePath(product.image)" alt="{{ product.name }}" class="catalog-img product-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductElms',
  data() {
    return {
      product: {}
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      const productId = 5; 
      axios.get(`http://localhost:3000/api/product/${productId}`)
        .then(response => {
          this.product = response.data;
          console.log(this.product); 
        })
        .catch(error => {
          console.error("Ошибка при получении продукта:", error);
        });
    },
    getImagePath(image) {
      return image ? require(`@/assets/img/catalog/${image}`) : ''; 
    }
  },
};
</script>

<!-- <template>
  <div class="product">
    <div class="container">
      <h2 class="product-h2">Подробное описание услуги</h2>
      <div class="row product-row">
        <div class="col-9 ">
          <h3 class="product-h-name">
            «Галактика ELMS»
          </h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">Организуйте сквозной процесс обучения с возможностью интеграции с уже существующими
            системами</p>

          <h3 class="product-h">Характеристики</h3>
          <ul class="product-speial">
            <li>Широкий спектр функциональных возможностей для организации, проведения и управления обучением</li>
            <li>С помощью платформы «Галактика eLMS» происходит регулярное обучение сотрудников на основе единых
              стандартов и унифицированных процессов</li>
            <li>В системе имеется мощный конструктор отчетов «Галактика eLMS» - модуль, который позволяет пользователям
              формировать отчеты по необходимым KPI</li>
            <li>Возможность интеграции с различными системами позиционирует продукт «Галактика eLMS» как решение класса
              Enterprise</li>
            <li>Платформа позволяет эффективно проводить адаптацию нового персонала посредством назначения
              индивиудальных и групповых календарных планов в сформированных группах на обучение</li>
            <li>Система не имеет ограничений по количеству пользователей и количеству обучаемых, а также имеется
              возможность реализации специфических требований</li>
          </ul>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>«Галактика eLMS» – комплексное решение, позволяющее организовать сквозной процесс обучения и развития
              персонала, интегрируемое с основными информационными системами предприятия в части кадрового
              делопроизводства, бюджетного планирования и т.д. Сокращает инфраструктурные и ресурсные затраты.
              Повышает эффективность обучения в компании.

            </p>

            <p>«Галактика eLMS» позволяет организовать обучение в любой отрасли
              Включает развитую сеть согласований и уведомлений.
              Контролирует качество обучения сотрудников.
              Позволяет проводить аттестацию персонала.
            </p>
          </div>

          <a href="https://galaktika.ru/elms">
            <button type="button" class="btn btn-primary">Узнать еще подробнее</button>
          </a>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>


        </div>
        <div class="col-3">
          <img class="catalog-img product-img catalog-img-size" src="@/assets/img/catalog/elms.png" alt="«Галактика ELMS»">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductElms',
  meta: {
    title: 'Услуга «Галактика ELMS» — Корпорация «Галактика'
  },
};
</script> -->