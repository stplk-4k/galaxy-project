<template>
  <div class="product">
    <div class="container">
      <h2 class="product-h2">Подробное описание услуги</h2>
      <div class="row product-row">
        <div class="col-9">
          <h3 class="product-h-name">
            «Галактика ESB»
          </h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">Получайте все бизнес-данные в едином информационном пространстве</p>

          <h3 class="product-h">Характеристики</h3>
          <ul class="product-speial">
            <li>Используются передовые инструменты и технологии</li>
            <li>Используя отечественный продукт, вы не подвергаетесь санкционным рискам</li>
            <li>
              Собственная разработка, позволяющая быстро и гибко дорабатывать продукт под требования заказчика без
              обращения к сторонним разработчикам
            </li>
            <li>Коробочный продукт включает адаптеры к системам «Галактика ERP», «Галактика ESB», «Галактика EAM»,
              «Галактика Казначейство», 1С, СУБД (MS SQL, Oracle, PostgreSQL), ActiveDirectory, файловый адаптер</li>
            <li>Системы не нужно дополнительно адаптировать к работе с ESB</li>
            <li>
              Консультации и техническое сопровождение пользователей в любое время по всем вопросам использования
              продукта
            </li>
          </ul>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>Платформа «Галактика ESB» предоставляет удобный и надежный механизм управления миграцией данных в информационной среде организации. Интеграционная шина разработана по модульной архитектуре, которая в сочетании с используемыми передовыми технологиями позволяет настроить интеграцию разнородных решений с минимальными затратами и обладает при этом широкими возможностями для кастомизации и расширения.
            </p>

            <p>Обеспечивается асинхронная передача сообщений, то есть при массовых изменениях в базах данных систем адаптеры могут принимать и отправлять данные многопоточно. Однако при сохранении данных в БД используется механизм согласованной записи во избежание дублирующих операций
            </p>
          </div>

          <a href="https://galaktika.ru/esb">
            <button type="button" class="btn btn-primary">Узнать еще подробнее</button>
          </a>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>


        </div>
        <div class="col-3">
          <img class="catalog-img product-img" src="@/assets/img/catalog/esb.png" alt="«Галактика ESB»">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductEsb',
  meta: {
    title: 'Услуга «Галактика ESB» — Корпорация «Галактика'
  },
};
</script>