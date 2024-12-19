<template>
  <div class="cart">
    <h2>Корзина</h2>
    <div v-if="cartItems.length > 0">
      <ul class="cart-ul">
        <li v-for="item in cartItems" :key="item.productId">
          <div class="row cart-row">
            <div class="row">
              <div class="col-2">
                <p>Название</p>
              </div>
              <div class="col-9">
                <p class="cart-color">{{ item.name }}</p>
              </div>
              <div class="col-1"><button @click="removeFromCart(item.productId)" class="btn btn-cart-remove">
                  <img src="@/assets/img/icons/close.png" alt="Удалить">
                </button></div>
            </div>
            <div class="row">
              <div class="col-2">
                <p>Описание</p>
              </div>
              <div class="col-9">
                <p>{{ item.short_description }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <p>Цена</p>
              </div>
              <div class="col-9">
                <p class="cart-color">{{ item.price }} руб.</p>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <p class="cart-total">Общая стоимость услуг:  {{ calculateTotal() }} руб.</p>

      <router-link to="/catalog">
        <button type="button" class="btn btn-secondary">Добавить услуги</button>
      </router-link>
      <button class="btn btn-secondary btn-cart-clear" @click="clearCart">Очистить корзину</button>
      <button class="btn btn-primary" @click="checkout">Оформить заказ</button>

    </div>
    <div v-else>
      <p>Ваша корзина пуста</p>
      <router-link to="/catalog">
        <button type="button" class="btn btn-secondary btn-cart-zero">Посмотреть услуги</button>
      </router-link>
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
      if (!username) return;

      try {
        const response = await axios.get(`http://localhost:3000/api/cart/${username}`);
        cartItems.value = response.data;
        console.log('Fetched cart items:', response.data);
      } catch (error) {
        console.error("Ошибка при получении товаров из корзины:", error);
      }
    };

    const removeFromCart = async (productId) => {
      const username = getUsername();

      if (!username) {
        alert('Пожалуйста, войдите в систему, чтобы удалить товары из корзины.');
        return;
      }

      try {
        const response = await axios.delete('http://localhost:3000/api/cart/remove', {
          data: { productId, username }
        });

        console.log('Response from server:', response.data);
        alert(response.data.message);

        await fetchCartItems();
        window.location.reload();
        if (cartItems.value.length === 0) {
          alert('Корзина пуста.');
        }
      } catch (error) {
        console.error("Ошибка при удалении товара из корзины:", error);

        if (error.response && error.response.status === 404) {
          alert('Товар не найден в корзине.');
        } else {
          alert('Не удалось удалить товар из корзины.');
        }
      }
    };

    const clearCart = async () => {
      const username = getUsername();

      if (!username) {
        alert('Пожалуйста, войдите в систему, чтобы очистить корзину.');
        return;
      }

      try {
        const response = await axios.delete('http://localhost:3000/api/cart/clear', {
          data: { username }
        });

        cartItems.value = []; 
        alert(response.data.message);
      } catch (error) {
        console.error("Ошибка при очистке корзины:", error);
        alert('Не удалось очистить корзину.');
      }
    };

    const calculateTotal = () => {
      return cartItems.value.reduce((total, item) => {
        return total + item.price; 
      }, 0);
    };

    onMounted(fetchCartItems);

    return {
      cartItems,
      removeFromCart,
      clearCart,
      calculateTotal,
    };
  },
};


</script>
