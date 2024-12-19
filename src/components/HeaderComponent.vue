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
                                            <button type="submit" class="btn btn-primary btn-header">Войти</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div v-else>
                                <h3 class="header-form-true">Вы вошли под логином: {{ login }}</h3>
                                <div class="header-form-btn">
                                    <router-link to="/cart" class="btn btn-link btn-cart">
                                        <img src="@/assets/img/icons/cart.png" alt="Корзина">
                                    </router-link>
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
import { login as saveLogin, logout as clearLogin, isLoggedIn as checkIsLoggedIn } from '@/store/auth';
import Swal from 'sweetalert2';

export default {
    setup() {
        const login = ref('');
        const password = ref('');

        const isLoggedIn = checkIsLoggedIn();

        if (isLoggedIn) {
            login.value = localStorage.getItem('username');
        }

        const loginUser = async () => {
            if (!login.value || !password.value) {
                Swal.fire({
                    title: 'Ошибка!',
                    text: "Пожалуйста, введите логин и пароль.",
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#0060cc',
                });
                return;
            }

            try {
                const response = await axios.post('http://localhost:3000/api/login', {
                    username: login.value,
                    password: password.value,
                });

                saveLogin(login.value, response.data.token);

                window.location.href = '/account';
                Swal.fire({
                    title: 'Успешно!',
                    text: "Вход успешен!",
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#0060cc',
                    allowOutsideClick: false,
                });
            } catch (error) {
                if (error.response && error.response.data) {
                    Swal.fire({
                        title: 'Ошибка!',
                        text: error.response.data.message,
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#0060cc',
                    });
                } else {
                    Swal.fire({
                        title: 'Ошибка!',
                        text: 'Произошла ошибка при входе. Пожалуйста, попробуйте еще раз.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#0060cc',
                    });
                }
            }
        };

        const logout = () => {
            clearLogin();
            window.location.href = '/';
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
