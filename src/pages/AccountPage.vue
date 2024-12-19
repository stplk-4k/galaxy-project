<template>
  <div class="account">
    <div class="container">
      <h2>Личный кабинет</h2>

      <h3>Добро пожаловать, {{ username }}!</h3>

      <div class="account-buttons">
        <button @click="writeReview" class="btn btn-link btn-account">Написать отзыв</button>
        <router-link to="/cart" class="btn btn-link btn-cart">
          Перейти в корзину
        </router-link>
        <button @click="logout" class="btn btn-primary">Выйти из аккаунта</button>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import { getUsername, logout as clearLogin } from '@/store/auth';

export default {
  setup() {
    const username = ref(getUsername() || 'Гость');

    const writeReview = () => {
      window.location.href = '/writeReview';
    };

    const logout = () => {
      clearLogin();
      window.location.href = '/';
    };

    return {
      username,
      writeReview,
      logout,
    };
  },
};
</script>