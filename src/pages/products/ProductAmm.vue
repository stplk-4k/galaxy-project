<template>
  <div class="product">
    <div class="container">
      <h2 class="product-h2">Подробное описание услуги</h2>
      <div class="row product-row">
        <div class="col-9">
          <h3 class="product-h-name">
            «Галактика AMM»
          </h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">Постройте прибыльный и эффективный производственный процесс на любом предприятии</p>

          <h3 class="product-h">Характеристики</h3>
          <ul class="product-speial">
            <li>Синхронное планирование и контроль работ по всему жизненному циклу изделия</li>
            <li>Встроенные механизмы, поддерживающие современные методы управления проектами</li>
            <li>Реализация управления производством как внутренними цепями производственных и поставочных работ (SCM)
            </li>
            <li>Реализация процессного подхода к управлению основным и обеспечивающим производством</li>
            <li>Обеспечение анализа эффективности бизнес-процессов</li>
            <li>Встроенные механизмы многомерного анализа данных</li>
          </ul>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>Система «Галактика AMM» (Advanced Manufacturing Management) – инструмент развития организационного
              управления современным производственным предприятием в рамках цифровой трансформации промышленности. В
              «Галактика АММ» используется современный подход к управлению и организации производства на предприятии.
            </p>

            <p>«Галактика AMM» повышает эффективность планирования и управления производством, обеспечивает оперативный
              мониторинг производственных подразделений, кооперационных поставок и материально-технического обеспечения.
            </p>
          </div>

          <a href="https://galaktika.ru/amm">
            <button type="button" class="btn btn-primary">Узнать еще подробнее</button>
          </a>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>


        </div>
        <div class="col-3">
          <img class="catalog-img product-img" src="@/assets/img/catalog/amm.png" alt="«Галактика AMM»">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductAmm',
  meta: {
    title: 'Услуга «Галактика AMM» — Корпорация «Галактика'
  },
};
</script>