<template>
  <div class="product">
    <div class="container">
      <h2 class="product-h2">Подробное описание услуги</h2>
      <div class="row product-row">
        <div class="col-9">
          <h3 class="product-h-name">{{ product.name }}</h3>
          <h3 class="product-h">Краткое описание</h3>
          <p class="product-short">{{ product.short_description }}</p>

          <h3 class="product-h">Подробное описание</h3>
          <div class="product-detailed">
            <p>{{ product.full_description }}</p>
          </div>

          <h3 class="product-h">Цена</h3>
          <div class="product-detailed">
            <p>{{ product.price }} руб.</p>
          </div>

          <button type="button" class="btn btn-primary" @click="addToCart">Купить</button>
          <router-link to="/catalog">
            <button type="button" class="btn btn-secondary">Обратно в каталог</button>
          </router-link>
        </div>
        <div class="col-3">
          <img :src="getImagePath(product.image)" alt="{{ product.name }}" class="catalog-img product-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { isLoggedIn, getUsername } from '@/store/auth.js';

export default {
  name: 'ProductAmm',
  data() {
    return {
      product: {}
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      const productId = this.$route.params.id; 
      axios.get(`http://localhost:3000/api/product/${productId}`)
        .then(response => {
          this.product = response.data;
          console.log(this.product); 
        })
        .catch(error => {
          console.error("Ошибка при получении продукта:", error);
        });
    },
    getImagePath(image) {
      return image ? require(`@/assets/img/catalog/${image}`) : ''; 
    },
    async addToCart() {
      if (!isLoggedIn()) {
        alert('Пожалуйста, войдите в систему, чтобы добавить товары в корзину.');
        return;
      }

      const username = getUsername(); 
      console.log('Adding to cart:', { productId: this.product.id, username });

      try {
        
        const response = await axios.post('http://localhost:3000/api/cart/add', {
          productId: this.product.id,
          username: username, 
        });

        console.log('Response from server:', response.data);

        alert(response.data.message);
        this.$router.push('/cart');
      } catch (error) {
        if (error.response && error.response.status === 400) {
            alert('Товар уже добавлен в корзину.');
        } else {
            console.error("Ошибка при добавлении товара в корзину:", error);
            alert('Не удалось добавить товар в корзину.');
        }
    }
    }
  }
  
};
</script>