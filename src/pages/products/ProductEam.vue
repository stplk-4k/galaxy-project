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
  name: 'ProductEam',
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
      const productId = 3; 
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
            «Галактика EAM»
          </h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">Снижайте стоимость владения активами и сокращайте затраты на их восстановление</p>

          <h3 class="product-h">Характеристики</h3>
          <ul class="product-speial">
            <li>Отечественная система, включенная в реестр Минкомсвязи России</li>
            <li>Основана на лучших методиках стратегического подхода к управлению надёжностью промышленных активов</li>
            <li>Широкие функциональные возможности соответствуют типовым процессам в области технического обслуживания и
              ремонтов</li>
            <li>Поддержка множества СУБД (включая СУБД PostgreSQL (Postgres Pro), глубокая и бесшовная интеграция с
              используемой на предприятии ERP-платформой, а также системами АСУТП, диагностирования, мобильными
              устройствами и приложениями</li>
            <li>Современная платформа - процессное управление, средства анализа OLAP, карты показателей KPI, рассылка
              сообщений, сценарии согласований, версионность документов, настройка рабочих мест</li>
            <li>Централизованная или распределенная архитектура, использование мобильного или web-клиента</li>
          </ul>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>«Галактика ЕАМ» — российская комплексная информационная система управления производственными активами на
              всем жизненном цикле.
              Сокращайте затраты на техническое обслуживание и ремонт, повышайте доступность активов.
              Повышает эффективность использования активов.
              Снижает стоимость владения производственных активов.
              Управляет всеми типами активов предприятия.

            </p>

            <p>Контролирует техническое состояние оборудования.
              Выявляет наиболее критические объекты и снижает риски отказов.
              Определяет оптимальные воздействия для обеспечения требуемого уровня надежности.
              Сокращает внеплановые работы и простои оборудования.
              Балансирует материальные и трудовые ресурсы.
              Оптимизирует затраты на содержание и потери от отказов.
            </p>
          </div>

          <a href="https://galaktika.ru/eam">
            <button type="button" class="btn btn-primary">Узнать еще подробнее</button>
          </a>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>


        </div>
        <div class="col-3">
          <img class="catalog-img product-img" src="@/assets/img/catalog/eam.png" alt="«Галактика EAM»">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductEam',
  meta: {
    title: 'Услуга «Галактика EAM» — Корпорация «Галактика'
  },
};
</script> -->