<template>
  <div class="registration">
    <div class="container">
      <h2>Регистрация</h2>

      <div class="form-registration">
        <form action="/" method="post">
          <label> Ваше имя: <input type="text" placeholder="Имя" class="form-contact-input form-reg-name" /></label>
          <br>
          <label> Придумайте логин: <input type="text" placeholder="Логин"
              class="form-contact-input form-reg-login" /></label>
          <br>
          <label> Ваш email: <input type="email" placeholder="Email"
              class="form-contact-input form-reg-email" /></label>
          <br>
          <label> Придумайте пароль: <input type="password" placeholder="Password"
              class="form-contact-input form-reg-pass" /></label>
          <br>
          <div class="form-contact-check">
            <input type="checkbox" name="personal_data" checked />
            <label for="personal_data">Согласен(а) на обработку персональных данных</label>
          </div>
          <button class="btn btn-primary btn-reg">Зарегистрироваться</button>
          <router-link to="/enter">
            <button type="button" class="btn btn-link ">Уже зарегистрирован</button>
          </router-link>
          
        </form>


      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationPage',
  meta: {
    title: 'Регистрация — Корпорация «Галактика»'
  },
};
</script>