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
  name: 'ProductAmm',
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
      const productId = 8; 
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
            «Галактика MES"
          </h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">Реализуйте планирование по операциям и диспетчеризацию внутри производственных подразделений</p>

          <h3 class="product-h">Характеристики</h3>
          <ul class="product-speial">
            <li>Сквозное решение от одного поставщика по управлению производством на всех уровнях: от холдинга до рабочего места</li>
            <li>Наличие специализированного интерфейса пользователей системы «Галактика MES» для информационных киосков (терминалов) и планшетов</li>
            <li>Наличие интерфейса для сбора данных в электронном виде непосредственно с технологического оборудования: систем мониторинга оборудования, промышленных контроллеров, датчиков</li>
            <li>Легкость встраивания в текущую ИТ-инфраструктуру предприятия путем интеграции с внешней системой управления производством (ERP-системой) верхнего уровня</li>
          </ul>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>«Галактика MES» (Manufacturing Execution System) – решение для оперативного управления производством в рамках цеха (участка): планирование операций и работ по рабочим местам (оборудованию) и персоналу, оперативный контроль и сбор данных о выполнении операций и состоянии оборудования, анализ эффективности использования основных производственных ресурсов (оборудования и персонала).
            </p>

            <p>«Галактика MES» дополняет сквозную линейку решений корпорации «Галактика» по управлению производством на всех уровнях: производственное объединение – предприятие – цех.
            </p>
          </div>

          <a href="https://galaktika.ru/mes">
            <button type="button" class="btn btn-primary">Узнать еще подробнее</button>
          </a>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>


        </div>
        <div class="col-3">
          <img class="catalog-img product-img catalog-img-size" src="@/assets/img/catalog/mes.png" alt="«Галактика MES">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductMes',
  meta: {
    title: 'Услуга «Галактика MES" — Корпорация «Галактика'
  },
};
</script> -->