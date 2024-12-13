<template>
  <div class="product-detail">
    <h2>{{ product.name }}</h2>
    <p><strong>Краткое описание:</strong> {{ product.short_description }}</p>
    <p><strong>Полное описание:</strong> {{ product.full_description }}</p>
    <p><strong>Цена:</strong> {{ product.price }} руб.</p>
    <img :src="require(`@/${product.image}`)" alt="Продукт" />
    <button @click="writeReview" class="btn btn-primary">Написать отзыв</button>
    <button @click="logout" class="btn btn-danger">Выйти из аккаунта</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
// import { useRoute } from 'vue-router';

export default {
  setup() {
    const product = ref({});
    // const route = useRoute();

    const loadProduct = async () => {
      const productId = 1; // Получаем ID из параметров маршрута
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${productId}`);
        product.value = response.data; // Загружаем данные о продукте
      } catch (error) {
        console.error('Ошибка загрузки продукта:', error);
      }
    };

    const writeReview = () => {
      window.location.href = '/write-review'; // Переход на страницу написания отзыва
    };

    const logout = () => {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      window.location.href = '/'; // Перенаправление на главную страницу после выхода
    };

    onMounted(loadProduct); // Загружаем продукт при монтировании компонента

    return {
      product,
      writeReview,
      logout,
    };
  },
};
</script>
