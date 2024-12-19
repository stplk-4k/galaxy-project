<template>
  <div class="registration">
    <div class="container">
      <h2>Вход</h2>

      <div class="form-registration">
        <form @submit.prevent="login" v-if="!isLoggedIn">
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

        <div v-else>
          <h2>Здравствуйте, {{ username }}!</h2>
          <router-link to="/feedback" class="btn btn-link btn-cart">
            <button class="btn btn-link btn-enter-true">Написать отзыв</button>
          </router-link>
          <button @click="logout" class="btn btn-primary">Выйти из аккаунта</button>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { login as saveLogin, logout as clearLogin, isLoggedIn, getUsername } from '@/store/auth';

export default {
  name: 'EnterPage',
  meta: {
    title: 'Вход — Корпорация «Галактика»'
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const errors = ref({});

    const isUserLoggedIn = isLoggedIn();

    if (isUserLoggedIn) {
      username.value = getUsername();
    }

    const login = async () => {
      errors.value = {};
      if (!username.value) errors.value.username = 'Логин обязателен';
      if (!password.value) errors.value.password = 'Пароль обязателен';

      if (Object.keys(errors.value).length === 0) {
        try {
          const response = await axios.post('http://localhost:3000/api/login', {
            username: username.value,
            password: password.value,
          });
          alert('Вход успешен!');
          saveLogin(username.value, response.data.token);

          window.location.href = '/account';
        } catch (error) {
          alert(error.response.data.message);
        }
      }
    };

    const logout = () => {
      clearLogin();
      window.location.href = '/';
    };

    return {
      username,
      password,
      errors,
      login,
      logout,
      isUserLoggedIn,
    };
  },
};
</script>