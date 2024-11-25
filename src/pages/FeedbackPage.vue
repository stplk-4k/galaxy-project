<template>
  <div class="feedback">
    <div class="container">
      <h2>Отзывы</h2>

      <div class="feedback-form">

        <form @submit.prevent="submitForm">
          <div class="feedback-name">
            <label>Ваше ФИО:</label>
            <input v-model="formData.name" placeholder="Иванов Иван Иванович" class="form-contact-input" type="text"
              required />
          </div>
          <div class="feedback-text">
            <label class="form-contact-topic">Ваш отзыв:</label>
            <textarea v-model="formData.review" placeholder="Место для отзыва" class="form-contact-textarea"
              required></textarea>
          </div>

          <div class="feedback-gender">
            <label>Выберите пол:</label>
            <div class="feedback-gender-checkbox">
              <div class="form-check">
                <input v-model="formData.gender" class="form-check-input" type="radio" name="gender" id="male">
                <label class="form-check-label" for="male">
                  Мужской
                </label>
              </div>
              <div class="form-check">
                <input v-model="formData.gender" class="form-check-input" type="radio" name="gender" id="female">
                <label class="form-check-label" for="female">
                  Женский
                </label>
              </div>
            </div>

          </div>

          <div class="feedback-city">
            <label>Ваш город:</label>
            <select v-model="formData.city" @change="cityChanged">
              <option value="">Выберите город</option>
              <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
              <option value="other">Другое</option>
            </select>

            <div v-if="formData.city === 'other'">
              <input placeholder="Введите другой город" v-model="formData.otherCity" class="other-city-input"
                type="text" required />
            </div>
          </div>

          <div class="feedback-checkbox">
            <div class="form-check form-switch">
              <input v-model="formData.newsletter" class="form-check-input " type="checkbox" id="news">
              <label class="form-check-label" for="news">Подписаться на рассылку</label>
            </div>

            <div v-if="formData.newsletter">
              <label>Ваш email:</label>
              <input placeholder="myEmail@gmail.com" v-model="formData.email" class="feedback-checkbox-email"
                type="email" required />
            </div>

            <label>
              <input v-model="formData.agreeToDataProcessing" type="checkbox" role="switch"
                class="feedback-checkbox-data" required />
              Согласен(а) на обработку персональных данных
            </label>
          </div>

          <button type="submit" class="btn btn-primary">Оставить отзыв</button>
        </form>

        <h2>Введенные данные:</h2>
        <pre>{{ formData }}</pre>

      </div>

      <h2>Отзывы:</h2>
      <ul>
        <li v-for="review in reviews" :key="review.id">
          <strong>{{ review.name }}:</strong> {{ review.review }} ({{ review.gender }}, {{ review.city }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'FeedbackPage',
  meta: {
    title: 'Отзывы - Корпорация «Галактика»'
  },
  setup() {
    const formData = ref({
      name: '',
      review: '',
      gender: '',
      agreeToDataProcessing: false,
      newsletter: false,
      email: '',
      city: '',
      otherCity: '',
    });

    const reviews = ref([]);
    const cities = ref([
      'Москва',
      'Санкт-Петербург',
      'Казань',
      'Новосибирск',
      'Екатеринбург',
      'Нижний Новгород',
      'Ростов-на-Дону',
      'Красноярск',
      'Пермь',
      'Воронеж',
      'Волгоград',
      'Краснодар',
      'Самара',
      'Уфа',
      'Омск',
      'Челябинск',
      'Рязань',
      'Ижевск',
      'Ярославль',
      'Тюмень',
      'Барнаул',
      'Иркутск',
      'Владивосток',
      'Хабаровск',
      'Мурманск',
      'Архангельск',
      'Калининград',
      'Саратов',
      'Тольятти',
      'Киров',
      'Ульяновск',
      'Астрахань',
      'Пенза',
      'Томск',
      'Липецк',
      'Тверь',
      'Кемерово',
      'Рыбинск',
      'Белгород',
      'Курск',
      'Иваново',
      'Брянск',
      'Симферополь',
      'Севастополь',
    ]);

    async function fetchReviews() {
      try {
        const response = await axios.get('http://localhost:3000/api/reviews');
        reviews.value = response.data;
      } catch (error) {
        console.error(error);
      }
    }

    function cityChanged() {
      if (formData.value.city === 'other') {
        formData.value.otherCity = '';
      } else {
        formData.value.otherCity = null;
      }
    }

    async function submitForm() {
      try {
        if (!formData.value.agreeToDataProcessing) {
          alert('Необходимо согласие на обработку персональных данных');
          return;
        }
        const reviewData = { ...formData.value };
        if (reviewData.city === 'other') {
          reviewData.city = reviewData.otherCity;
          delete reviewData.otherCity;
        }
        if (!reviewData.newsletter) {
          delete reviewData.email;
        }
        const response = await axios.post('http://localhost:3000/api/reviews', reviewData);
        reviews.value.push(response.data);
        formData.value = {
          name: '',
          review: '',
          gender: '',
          agreeToDataProcessing: false,
          newsletter: false,
          email: '',
          city: '',
          otherCity: '',
          additionalInfo: '',
        };
      } catch (error) {
        console.error(error);
      }
    }

    onMounted(() => {
      fetchReviews();
    });


    return {
      formData,
      reviews,
      cities,
      cityChanged,
      submitForm,
    };
  },
};
</script>