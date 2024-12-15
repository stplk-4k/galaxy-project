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
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const username = ref(localStorage.getItem('username') || 'Гость');

    const writeReview = () => {
      router.push('/write-review'); 
    };

    const logout = () => {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      router.push('/'); 
    };

    return {
      username,
      writeReview,
      logout,
    };
  },
};
</script>
