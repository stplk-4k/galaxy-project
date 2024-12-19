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

      <p class="cart-total">Общая стоимость услуг: {{ calculateTotal() }} руб.</p>

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
import Swal from 'sweetalert2';

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
        Swal.fire('Ошибка!', 'Пожалуйста, войдите в систему, чтобы удалить товары из корзины.', 'error');
        return;
      }

      try {
        const response = await axios.delete('http://localhost:3000/api/cart/remove', {
          data: { productId, username }
        });

        console.log('Response from server:', response.data);
        await fetchCartItems();
        Swal.fire({
          title: 'Успешно!',
          text: response.data.message,
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#0060cc',
        });
      } catch (error) {
        console.error("Ошибка при удалении товара из корзины:", error);

        if (error.response && error.response.status === 404) {
          Swal.fire('Ошибка!', "Товар не найден в корзине.", 'error');
        } else {
          Swal.fire('Ошибка!', "Не удалось удалить товар из корзины.", 'error');
        }
      }
    };

    const clearCart = async () => {
      const username = getUsername();

      if (!username) {
        Swal.fire('Ошибка!', 'Пожалуйста, войдите в систему, чтобы очистить корзину.', 'error');
        return;
      }

      try {
        const response = await axios.delete('http://localhost:3000/api/cart/clear', {
          data: { username }
        });

        cartItems.value = [];
        Swal.fire({
          title: 'Успешно!',
          text: response.data.message,
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#0060cc',
        });
      } catch (error) {
        console.error("Ошибка при очистке корзины:", error);
        Swal.fire('Ошибка!', 'Не удалось очистить корзину.', 'error');
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
