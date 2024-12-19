<template>
  <div class="cart">
    <h2>Корзина</h2>
    <div v-if="cartItems.length > 0">
      <ul>
        <li v-for="item in cartItems" :key="item.productId">
          <p>Товар ID: {{ item.productId }}</p>
          
        </li>
      </ul>
      <button @click="checkout">Оформить заказ</button>
    </div>
    <div v-else>
      <p>Ваша корзина пуста.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { getUsername } from '@/store/auth'; 

export default {
  setup() {
    const cartItems = ref([]);

    const fetchCartItems = async () => {
      const username = getUsername();
      // console.log('Fetching cart items for user:', username); 
      if (!username) {
        return; 
      }

      try {
        const response = await axios.get(`http://localhost:3000/api/cart/${username}`);
        cartItems.value = response.data; 
        // console.log('Fetched cart items:', response.data); 
      } catch (error) {
        console.error("Ошибка при получении товаров из корзины:", error);
      }
    };

    onMounted(fetchCartItems); 

    return {
      cartItems,
    };
  },
};


</script>

