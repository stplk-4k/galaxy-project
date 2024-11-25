<template>
  <div class="feedback">
    <div class="container">
      <h2>Отзывы</h2>

      <div class="swiper-container">
        <swiper ref="swiperRef" :options="swiperOptions" @swiper="setSwiperRef">
          <swiper-slide v-for="review in reviews" :key="review.id">
            <div class="review-slide">
              <h3 class='review-slide-feedback'> {{ review.review }} </h3>
              <p>Автор отзыва: <i class='review-slide-text'> {{ review.name }} </i></p>
              <p>Город: <i class='review-slide-text'>{{ review.city }} </i></p>

            </div>
          </swiper-slide>
        </swiper>

        <div class="swiper-button-prev" @click="slidePrev"></div>
        <div class="swiper-button-next" @click="slideNext"></div>
      </div>

      <h2>Оставьте и вы отзыв!</h2>

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

        <!-- <h2>Введенные данные:</h2>
        <pre>{{ formData }}</pre> -->

      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import Swal from 'sweetalert2';

export default {
  name: 'FeedbackPage',
  components: { Swiper, SwiperSlide },
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
    const swiperRef = ref(null);
    const swiperInstance = ref(null);

    const swiperOptions = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };
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

    function setSwiperRef(swiper) {
      swiperInstance.value = swiper;
    }

    function slidePrev() {
      if (swiperInstance.value) {
        swiperInstance.value.slidePrev();
      }
    }

    function slideNext() {
      if (swiperInstance.value) {
        swiperInstance.value.slideNext();
      }
    }

    async function fetchReviews() {
      try {
        const response = await axios.get('http://localhost:3000/api/reviews');
        reviews.value = response.data;
      } catch (error) {
        if (error.response) {
          console.error('Error response:', error.response);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
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
          Swal.fire('Ошибка!', 'Необходимо согласие на обработку персональных данных', 'error');
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
        Swal.fire({
          title: 'Успешно!',
          text: 'Ваш отзыв успешно оставлен!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#0060cc', 
          cancelButtonText: 'Отмена',
          cancelButtonColor: '#e74c3c',
        });
      } catch (error) {
        let errorMessage = 'Произошла ошибка при отправке отзыва.';
        if (error.response) {
          errorMessage = error.response.data.message || 'Серверная ошибка.';
        } else if (error.request) {
          errorMessage = 'Ошибка соединения с сервером.';
        } else {
          errorMessage = error.message;
        }
        Swal.fire('Ошибка!', errorMessage, 'error');
      }
    }

    onMounted(() => {
      fetchReviews();
    });


    return {
      formData,
      reviews,
      // swipкer,
      swiperOptions,
      cities,
      cityChanged,
      submitForm,
      swiperRef,
      slidePrev,
      slideNext,
      setSwiperRef,
    };
  },
};
</script>
