<template>
  <div class="product">
    <div class="container">
      <h2 class="product-h2">Подробное описание услуги</h2>
      <div class="row product-row">
        <div class="col-9">
          <h3 class="product-h-name">
            «Галактика VUZ»
          </h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">Управляйте учебным процессом и научной деятельностью университета</p>

          <h3 class="product-h">Характеристики</h3>
          <ul class="product-speial">
            <li>Система «Галактика ERP» в рамках решения Галактика «Управление Вузом»</li>
            <li>Система «Галактика ERP. Управление учебным процессом»</li>
            <li>Система Галактика «Расписание учебных занятий»</li>
            <li>«Галактика: портал учебного заведения»</li>
            <li>Электронный документооборот вуза</li>
            <li>Система «Галактика ESB»</li>
            <li>Система «Галактика BI»</li>
          </ul>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>Экспертный центр корпорации «Галактика» по работе с вузами.
              Готовые тиражные решения для высших учебных заведений РФ
            </p>

            <p>Общероссийский центр сосредоточения опыта, знаний и компетенций по вопросам управления учебными заведениями. Экспертный центр открыт в 2009 году в Санкт-Петербурге. Специалисты компании обладают огромным опытом в выполнении проектов автоматизации учебных заведений. Высокая квалификация специалистов способствует эффективному выполнению проектов в вузах — в сжатые сроки и с минимальными рисками.
            </p>
          </div>

          <a href="https://galaktika.ru/vuz">
            <button type="button" class="btn btn-primary">Узнать еще подробнее</button>
          </a>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>


        </div>
        <div class="col-3">
          <img class="catalog-img catalog-img-size" src="@/assets/img/catalog/vuz.png" alt="«Галактика VUZ»">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductVuz',
  meta: {
    title: 'Услуга «Галактика VUZ» — Корпорация «Галактика'
  },
};
</script>