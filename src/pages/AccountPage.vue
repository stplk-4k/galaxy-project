<template>
  <div class="account">
    <div class="container">
      <h2>Личный кабинет</h2>

      <h3>Добро пожаловать, {{ username }}!</h3>
      <div class="account-buttons">
        <button @click="writeReview" class="btn btn-link btn-account">Написать отзыв</button>
        <button @click="logout" class="btn btn-primary">Выйти из аккаунта</button>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref(localStorage.getItem('username') || 'Гость');

    const writeReview = () => {
      // Логика для перехода на страницу написания отзыва
      window.location.href = '/write-review'; // Замените на нужный маршрут
    };

    const logout = () => {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      window.location.href = '/'; // Перенаправление на главную страницу после выхода
    };

    return {
      username,
      writeReview,
      logout,
    };
  },
};
</script>
