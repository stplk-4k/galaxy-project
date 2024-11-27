<template>

  <div class="contacts">
    <div class="container">
      <h2>Контактная информация</h2>
      <p class="contacts-p">АО «Корпорация Галактика» имеет постоянное местонахождение на территории Российской
        Федерации.</p>
      <div class="history-line"></div>
      <h3 class="contacts-h3">Адрес</h3>
      <h4 class="contacts-h4">Офис в БЦ «Петровский парк»</h4>
      <div class="row">
        <div class="col-1">
          <img src="@/assets/img/icons/location.png" alt="Адрес">
        </div>
        <div class="col-11">
          <p>125167, г. Москва, Театральная аллея, 3с1</p>
        </div>
      </div>
      <div class="row">
        <div class="col-1">
          <img src="@/assets/img/icons/phone.png" alt="Телефон">
        </div>
        <div class="col-11">
          <p>
            <a href="tel:+7 495 252-02-55" class="contacts-a">+7 495 252-02-55</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-1">
          <img src="@/assets/img/icons/mail.png" class="contacts-a" alt="Почта">
        </div>
        <div class="col-11">
          <p>
            <a href="mailto:market@galaktika.ru">market@galaktika.ru</a>
          </p>
        </div>
      </div>
      <iframe class="contacts-map"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A963660c6c1d944efc8569dd35c8018f87e745d46e7ad0dd4e9dbed12bbc436a6&amp;source=constructor"
        width="500" height="400" frameborder="0"></iframe>
      <div class="history-line"></div>

      <h3 class="form-contact-header">Напишите нам</h3>
      <div class="form-contact">
        <form action="/" method="post">
          <label> Ваше имя: <input type="text" placeholder="Имя" class="form-contact-input" /></label>
          <br>
          <label> Ваш email: <input type="email" placeholder="Email" class="form-contact-input" /></label>
          <br>
          <label class="form-contact-topic-label"> Тема сообщения: <input type="text" placeholder="Тема"
              class="form-contact-input form-contact-topic" /></label>
          <br>
          <label class="form-contact-textarea-label"> Текст сообщения: <textarea placeholder="Сообщение"
              class="form-contact-textarea"></textarea>
          </label>
          <div class="form-contact-check">
            <input type="checkbox" name="personal_data" checked />
            <label for="personal_data">Согласен(а) на обработку персональных данных</label>
          </div>
          <button class="form-contact-btn">Отправить</button>
        </form>
      </div>

      <div class="history-line"></div>

      <h3 class="contacts-h3">Меню сайта</h3>
      <ul class="contacts-ul">
        <li>
          <router-link to="/">Главная</router-link>
        </li>
        <li>
          <router-link to="/catalog">Каталог</router-link>
        </li>
        <li>
          <router-link to="/contacts">Контакты</router-link>
        </li>
        <li>
          <router-link to="/about">О нас</router-link>
        </li>
        <li>
          <router-link to="/history">История</router-link>
        </li>
        <li>
          <router-link to="/team">Сотрудники</router-link>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  meta: {
    title: 'Контакты — Корпорация «Галактика»'
  },
};
</script>