<template>
  <div v-if="isLoggedIn">
    <h2>Здравствуйте, {{ username }}!</h2>
    <button @click="logout">Выйти из аккаунта</button>
    <button @click="writeReview">Написать отзыв</button>
  </div>
</template>

<script>
import { getUsername, logout as clearLogin } from '@/store/auth';

export default {
  data() {
    return {
      username: getUsername() || '',
    };
  },
  computed: {
    isLoggedIn() {
      return !!this.username;
    },
  },
  methods: {
    logout() {
      clearLogin();
      window.location.href = '/'; 
    },
    writeReview() {
      window.location.href = '/write-review'; 
    },
  },
};
</script>