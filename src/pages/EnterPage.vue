<template>
  <div class="registration">
    <div class="container">
      <h2>Вход</h2>

      <div class="form-registration">
        <form @submit.prevent="login">
          <label>Ваш логин:
            <input v-model="username" type="text" placeholder="Логин" class="form-contact-input form-reg-login" />
            <span v-if="errors.username">{{ errors.username }}</span>
          </label>
          <br>
          <label>Ваш пароль:
            <input v-model="password" type="password" placeholder="Password" class="form-contact-input form-reg-pass" />
            <span v-if="errors.password">{{ errors.password }}</span>
          </label>
          <br>
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
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const errors = ref({});

    const validateForm = () => {
      errors.value = {};
      if (!username.value) errors.value.username = 'Логин обязателен';
      if (!password.value) errors.value.password = 'Пароль обязателен';
      
      return Object.keys(errors.value).length === 0;
    };

    const login = () => {
      if (validateForm()) {
        console.log('Вход успешен', { username: username.value, password: password.value });
      }
    };

    return {
      username,
      password,
      errors,
      login
    };
  }
};

// export default {
//   name: 'RegistrationPage',
//   meta: {
//     title: 'Вход — Корпорация «Галактика»'
//   },
// };
</script>