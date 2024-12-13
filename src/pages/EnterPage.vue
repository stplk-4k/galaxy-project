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
          <button @click="writeReview" class="btn btn-link btn-enter-true" >Написать отзыв</button>
          <button @click="logout" class="btn btn-primary">Выйти из аккаунта</button>
          
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const errors = ref({});

    const isLoggedIn = !!localStorage.getItem('username');

    if (isLoggedIn) {
      username.value = localStorage.getItem('username');
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
          localStorage.setItem('username', username.value);
          localStorage.setItem('token', response.data.token);
          // console.log(response.data.token); 
          // window.location.reload();
          window.location.href = '/account';
        } catch (error) {
          alert(error.response.data.message);
        }
      }
    };

    const logout = () => {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      window.location.href = '/';
      // window.location.reload(); // Перезагрузка страницы после выхода
    };

    const writeReview = () => {
      window.location.href = '/write-review'; // Замените на нужный маршрут
    };

    return {
      username,
      password,
      errors,
      login,
      logout,
      writeReview,
      isLoggedIn,
    };
  },
};

// export default {
//   name: 'RegistrationPage',
//   meta: {
//     title: 'Вход — Корпорация «Галактика»'
//   },
// };
</script>