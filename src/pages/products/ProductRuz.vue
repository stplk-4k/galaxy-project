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
  name: 'ProductRuz',
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
      const productId = 9; 
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
        <div class="col-9">
          <h3 class="product-h-name">
            «Галактика RUZ»
          </h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">Эффективно управляйте ресурсами вуза. Экономьте время при подготовке расписания
            учебных занятий</p>

          <h3 class="product-h">Характеристики</h3>
          <ul class="product-speial">
            <li>Масштабируемость и способность обработки больших потоков информации</li>
            <li>Эффективный конструктор расписания, автоматическое формирование опорного расписания, формирование
              расписания в автоматическом, ручном или комбинированном режиме</li>
            <li>Контроль выполнения более 40 различных параметризуемых требований</li>
            <li>
              Интеллектуальная поддержка действий пользователей
            </li>
            <li>Высокотехнологичный пользовательский интерфейс</li>
            <li>Развитая система функциональных и пользовательских настроек</li>
            <li>Мощная аналитическая подсистема и развитая система отчетности</li>
          </ul>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>Экономьте время при подготовке расписания учебных занятий, легко интегрируйте систему с любой
              информационной системой вуза, оптимизируйте занятость аудиторного фонда и фактическую загруженность
              профессорско-преподавательского состава, контролируйте качество образовательного процесса и используйте
              широкие возможности в подготовки отчётности.
            </p>

            <p>Экспертный центр по работе с вузами создан в Санкт-Петербурге на базе Северо-Западного отделения
              корпорации «Галактика» в 2010 году.
              В штате Экспертного центра – специалисты с глубоким знанием вузовской специфики, обладающие большим опытом
              реализации различных проектов.
            </p>
          </div>

          <a href="https://galaktika.ru/ruz">
            <button type="button" class="btn btn-primary">Узнать еще подробнее</button>
          </a>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>


        </div>
        <div class="col-3">
          <img class="catalog-img product-img catalog-img-size" src="@/assets/img/catalog/ruz.png" alt="«Галактика RUZ»">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductRuz',
  meta: {
    title: 'Услуга «Галактика RUZ» — Корпорация «Галактика'
  },
};
</script> -->