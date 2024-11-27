<template>
  <div class="registration">
    <div class="container">
      <h2>Вход</h2>

      <div class="form-registration">
        <form action="/" method="post">
          <label> Ваш логин: <input type="text" placeholder="Логин" class="form-contact-input form-reg-login" /></label>
          <br>
          <label> Ваш пароль: <input type="password" placeholder="Password" class="form-contact-input form-reg-pass" /></label>
          <br>
          <div class="form-contact-check">
            <input type="checkbox" name="personal_data" checked />
            <label for="personal_data">Согласен(а) на обработку персональных данных</label>
          </div>
          <button class="btn btn-primary btn-enter">Войти</button>
          <router-link to="/registration">
            <button type="button" class="btn btn-link ">Зарегистрироваться</button>
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
    title: 'Вход — Корпорация «Галактика»'
  },
};
</script>