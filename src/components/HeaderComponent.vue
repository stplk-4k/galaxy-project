<template>
    <header>
        <div id="header">
            <div class="container">
                <div class="header">
                    <div class="row">
                        <div class="col-sm-3 header-img">
                            <img class="logo-header p-3" src="../assets/img/logo-blue.png" alt="Логотип">
                        </div>
                        <div class="col-sm-5 header-text">
                            <h1 class="logo-text">Корпорация «Галактика»</h1>
                        </div>
                        <div class="col-sm-4 header-div-form">
                            <div v-if="!isLoggedIn">
                                <form class="header-form" @submit.prevent="loginUser">
                                    <!-- Используем @submit.prevent -->
                                    <div class="row g-3 mb-3 align-items-right ">
                                        <div class="col-auto mr-5 header-form-login">
                                            <label for="inputLogin"
                                                class="col-form-label header-form-label">Логин</label>
                                        </div>
                                        <div class="col-auto ">
                                            <input type="text" id="inputLogin" class="form-control" v-model="login"
                                                required />
                                        </div>
                                    </div>
                                    <div class="row g-3 align-items-center">
                                        <div class="col-auto">
                                            <label for="inputPassword"
                                                class="col-form-label header-form-label">Пароль</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type="password" id="inputPassword" class="form-control"
                                                v-model="password" required />
                                        </div>
                                    </div>
                                    <div class="row mt-3 header-buttons">
                                        <div class="col-auto">
                                            <router-link to="/registration">
                                                <button type="button"
                                                    class="btn btn-link btn-header">Регистрация</button>
                                            </router-link>
                                        </div>
                                        <div class="col-auto">
                                            <button  type="submit" class="btn btn-primary btn-header">Войти</button>
                                            <!-- Кнопка для отправки формы -->
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div v-else>
                                <h3 class="header-form-true">Вы вошли под логином: {{ login }}</h3>
                                <div class="header-form-btn">
                                    <router-link to="/account" class="btn btn-link btn-enter-true">Личный
                                        кабинет</router-link>
                                    <button @click="logout" class="btn btn-primary btn-header-exit">Выйти</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>


</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
    setup() {
        const login = ref('');
        const password = ref('');

        const isLoggedIn = !!localStorage.getItem('username');

        if (isLoggedIn) {
            login.value = localStorage.getItem('username');
        }

        const loginUser = async () => {
            // Проверка на пустые поля
            if (!login.value || !password.value) {
                alert('Пожалуйста, введите логин и пароль.');
                return;
            }

            try {
                const response = await axios.post('http://localhost:3000/api/login', {
                    username: login.value,
                    password: password.value,
                });

                alert('Вход успешен!');

                // Сохранение логина и токена
                localStorage.setItem('username', login.value);
                localStorage.setItem('token', response.data.token);


                // Обновление состояния
                window.location.href = '/account';
                // window.location.reload(); // Перезагрузка страницы для обновления состояния
            } catch (error) {
                // Обработка ошибки
                if (error.response && error.response.data) {
                    alert(error.response.data.message); // Показываем сообщение об ошибке
                } else {
                    alert('Произошла ошибка при входе. Пожалуйста, попробуйте еще раз.');
                }
            }
        };

        const logout = () => {
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            window.location.href = '/';
            // window.location.reload(); // Перезагрузка страницы после выхода
        };

        return {
            login,
            password,
            isLoggedIn,
            loginUser,
            logout,
        };
    },
};
</script>
