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
                            <form class="header-form">
                                <div class="row g-3 mb-3 align-items-right ">
                                    <div class="col-auto mr-5 header-form-login">
                                        <label for="inputLogin" class="col-form-label header-form-label">Логин</label>
                                    </div>
                                    <div class="col-auto ">
                                        <input type="text" id="inputLogin" class="form-control"
                                            aria-describedby="passwordHelpInline">
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword"
                                            class="col-form-label header-form-label">Пароль</label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="password" id="inputPassword" class="form-control"
                                            aria-describedby="passwordHelpInline">
                                    </div>
                                </div>
                                <div class="row mt-3 header-buttons">
                                    <div class="col-auto">
                                        <router-link to="/registration">
                                            <button type="button" class="btn btn-link btn-header">Регистрация</button>
                                        </router-link>
                                    </div>
                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-primary btn-header">Войти</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>


</template>

<script setup>
</script>
