<template>
  <div class="account">
    <div class="container">
      <h2 class="account-header">Личный кабинет</h2>

      <h3 class="account-header">Добро пожаловать, {{ username }}!</h3>

      <div class="account-buttons">
        <router-link to="/feedback">
          <button class="btn btn-secondary">Написать отзыв</button>
        </router-link>
        <router-link to="/cart" class="btn btn-secondary btn-cart">
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

    const logout = () => {
      clearLogin();
      window.location.href = '/';
    };

    return {
      username,
      logout,
    };
  },
};
</script>