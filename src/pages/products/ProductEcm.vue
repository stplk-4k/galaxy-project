<template>
  <div class="product">
    <div class="container">
      <h2 class="product-h2">Подробное описание услуги</h2>
      <div class="row product-row">
        <div class="col-9">
          <h3 class="product-h-name">
            «Галактика ECM»
          </h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">Управляйте документами и корпоративной информацией</p>

          <h3 class="product-h">Характеристики</h3>
          <ul class="product-speial">
            <li>Отечественная система, включенная в реестр Минкомсвязи России</li>
            <li>Импортонезависимое ПО</li>
            <li>Возможность аудирования всей цепочки исходных кодов для проведения сертификаций разработанных на
              платформе продуктов для хранения и обработки информации различных уровней конфиденциальности</li>
            <li>Поддержка работы с геоданными</li>
            <li>Широкие функциональные возможности по автоматизации, мониторингу и контролю бизнес-процессов, построению
              пользовательских интерфейсов</li>
            <li>Современная платформа - процессное управление, рассылка сообщений, сценарии согласований, версионность
              документов, настройка рабочих мест</li>
            <li>Централизованная или распределенная архитектура, использование web-клиента</li>
          </ul>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>«Галактика ECM.CORP» — базовая платформа для разработки бизнес-решений, предназначенная для контроля
              процессов, связанных с управлением, хранением и интеграцией данных.
              Повышает эффективность работы предприятия
              Оптимизирует инфраструктурные затраты
            </p>

            <p> «Галактика ECM» cокращает издержки на обработку документов
              Повышает производительность труда
              Повышает управленческую мобильность
              Сокращает время получения доступа к документам
            </p>
          </div>

          <a href="https://galaktika.ru/ecm">
            <button type="button" class="btn btn-primary">Узнать еще подробнее</button>
          </a>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>


        </div>
        <div class="col-3">
          <img class="catalog-img product-img catalog-img-size" src="@/assets/img/catalog/ecm.png" alt="«Галактика ECM»">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductEcm',
  meta: {
    title: 'Услуга «Галактика ECM» — Корпорация «Галактика'
  },
};
</script>