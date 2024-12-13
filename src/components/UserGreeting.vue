<template>
  <div v-if="isLoggedIn">
    <h2>Здравствуйте, {{ username }}!</h2>
    <button @click="logout">Выйти из аккаунта</button>
    <button @click="writeReview">Написать отзыв</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem('username') || '',
    };
  },
  computed: {
    isLoggedIn() {
      return !!this.username; // Проверка, вошел ли пользователь
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      window.location.href = '/'; // Перенаправление на главную страницу или страницу входа
    },
    writeReview() {
      // Логика для написания отзыва (например, перенаправление на страницу отзыва)
      window.location.href = '/write-review'; // Замените на нужный маршрут
    },
  },
};
</script>