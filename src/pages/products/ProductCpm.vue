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
  name: 'ProductCpm',
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
      const productId = 2; 
      axios.get(`http://localhost:3000/api/product/${productId}`)
        .then(response => {
          this.product = response.data;
          console.log(this.product); // Логируем полученные данные
        })
        .catch(error => {
          console.error("Ошибка при получении продукта:", error);
        });
    },
    getImagePath(image) {
      return image ? require(`@/assets/img/catalog/${image}`) : ''; // Возвращаем пустую строку, если image не задан
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
            «Галактика CPM - Казначейство»
          </h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">Достигайте совершенства в управлении финансами и принимайте решения в режиме
            реального времени</p>

          <h3 class="product-h">Характеристики</h3>
          <ul class="product-speial">
            <li>Встроенная система регламентов документооборота</li>
            <li>Контроль лимитов по множеству аналитик (разрезов)</li>
            <li>Централизованное управление финансами Группы</li>
            <li>Моделирование платежного календаря</li>
            <li>Автоматическое формирование и обработка документов</li>
            <li>Интеграция с любыми OLTP-системами</li>
          </ul>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>«Галактика Казначейство» объединяет все задачи оперативного управления финансами и предоставляет
              эффективные инструменты управления ликвидностью, платежеспособностью и денежными потоками компании или
              холдинга. Система позволяет всем участникам процессов работать в едином информационном пространстве,
              обеспечивая гибкое и согласованное управление финансовыми средствами.
            </p>
            <p>Единая форма балансировки платежного календаря, содержащая все ключевые данные для принятия решений и
              сервисы оперативного планирования, позволяет финансовым менеджерам эффективно управлять приоритетами
              платежей, исключить кассовые разрывы, риск невыполнения обязательств перед контрагентами и
              несанкционированные платежи, контролировать лимиты, обеспечить ликвидность и платежеспособность компании.
              Встроенная система документооборота обеспечивает согласование финансовых заявок и документное
              сопровождение движения денежных средств по установленным регламентам.
            </p>
          </div>
          <a href="https://galaktika.ru/kaz">
            <button type="button" class="btn btn-primary">Узнать еще подробнее</button>
          </a>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>
        </div>
        <div class="col-3">
          <img class="catalog-img product-img" src="@/assets/img/catalog/cpm.png" alt="«Галактика CPM»">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCpm',
  meta: {
    title: 'Услуга «Галактика CPM — Корпорация «Галактика'
  },
};
</script> -->