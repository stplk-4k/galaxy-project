<template>
  <div class="product">
    <div class="container">
      <h2 class="product-h2">Подробное описание услуги</h2>
      <div class="row product-row">
        <div class="col-9">
          <h3 class="product-h-name">
            «Галактика ERP»
          </h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">Эффективно решайте текущие и стратегические управленческие задачи современного предприятия</p>

          <h3 class="product-h">Характеристики</h3>
          <ul class="product-speial">
            <li>Единое ядро бизнес-логики со встроенными процессами и набором высокоэффективных инструментов</li>
            <li>Открытость для интеграции с любым программным обеспечением</li>
            <li>Встроенный OLAP — удобный инструмент для оперативного формирования отчетов</li>
            <li>Мощные средства администрирования и конфигурирования системы</li>
            <li>Концепция компонентной модели, благодаря которой упрощается процесс обновления системы при выходе новых версий</li>
            <li>Поддержка сервис-ориентированной архитектуры (SOA)</li>
          </ul>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>Интегрированная система управления предприятием «Галактика ERP» обладает широкими функциональными возможностями, отличными интеграционными свойствами и создана с учетом национальной специфики, лучшего бизнес-опыта и передовых методик управления.
            </p>

            <p>«Галактика ERP» — это гибкий и современный инструмент для решения текущих и стратегических управленческих задач современного предприятия в условиях цифровой экономики.
            </p>
          </div>

          <a href="https://galaktika.ru/erp">
            <button type="button" class="btn btn-primary">Узнать еще подробнее</button>
          </a>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>


        </div>
        <div class="col-3">
          <img class="catalog-img product-img" src="@/assets/img/catalog/erp.png" alt="«Галактика ERP»">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductErp',
  meta: {
    title: 'Услуга «Галактика ERP» — Корпорация «Галактика'
  },
};
</script>