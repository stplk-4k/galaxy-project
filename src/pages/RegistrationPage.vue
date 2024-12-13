<template>
  <div class="registration">
    <div class="container">
      <h2>Регистрация</h2>

      <div class="form-registration">
        <form @submit.prevent="register">
          <label>Ваше имя:
            <input v-model="name" type="text" placeholder="Имя" class="form-contact-input form-reg-name" />
          </label>
          <br>
          <label>Придумайте логин:
            <input v-model="username" type="text" placeholder="Логин" class="form-contact-input form-reg-login" />
            <span v-if="errors.username">{{ errors.username }}</span>
          </label>
          <br>
          <label>Ваш email:
            <input v-model="email" type="email" placeholder="Email" class="form-contact-input form-reg-email" />
            <span v-if="errors.email">{{ errors.email }}</span>
          </label>
          <br>
          <label>Придумайте пароль:
            <input v-model="password" type="password" placeholder="Password" class="form-contact-input form-reg-pass" />
            <span v-if="errors.password">{{ errors.password }}</span>
          </label>
          <br>
          <div class="form-contact-check">
            <input type="checkbox" v-model="agree" />
            <label for="personal_data">
              
              Согласен(а) на обработку персональных данных</label>
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
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const name = ref('');
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const agree = ref(false);
    const errors = ref({});

    const register = async () => {
      errors.value = {};
      if (!username.value) errors.value.username = 'Логин обязателен';
      if (!email.value) errors.value.email = 'Email обязателен';
      if (!password.value) errors.value.password = 'Пароль обязателен';
      if (!agree.value) {
        alert('Необходимо согласие на обработку персональных данных.');
        return;
      }

      if (Object.keys(errors.value).length === 0 && agree.value) {
        try {
          await axios.post('http://localhost:3000/api/register', {
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value,
          });

          alert('Регистрация успешна!');

          // Сохранение логина в localStorage
          localStorage.setItem('username', username.value);

          // Перенаправление на страницу личного кабинета
          window.location.href = '/account'; // Используем window.location.href
        } catch (error) {
          alert(error.response.data.message);
        }
      }
    };

    return {
      name,
      username,
      email,
      password,
      agree,
      errors,
      register,
    };
  },
};
// export default {
//   name: 'RegistrationPage',
//   meta: {
//     title: 'Регистрация — Корпорация «Галактика»'
//   },
// };
</script>