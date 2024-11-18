<template>
    <header>
        <div id="header">
            <div class="container">
                <div class="header">
                    <div class="row">
                        <div class="col-sm-3">
                            <img class="logo-header p-3" src="../assets/img/logo-blue.png" alt="Логотип">
                        </div>
                        <div class="col-sm-4">
                            <h1 class="logo-text">Корпорация «Галактика»</h1>
                        </div>
                        <div class="col-sm-5">
                            <!-- <form @submit.prevent="handleSubmit">
                                <div class="mb-3">
                                    <label for="username" class="form-label">Логин:</label>
                                    <input type="text" id="username" class="form-control" v-model="username" required />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Пароль:</label>
                                    <input type="password" id="password" class="form-control" v-model="password"
                                        required />
                                </div>
                                <div class="d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary">Войти</button>
                                </div>
                            </form> -->
                            <form>
                                <div class="row g-3 mb-3  align-items-center">
                                    <div class="col-auto mr-5">
                                        <label for="inputLogin" class="col-form-label">Логин</label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="еуче" id="inputPassword6" class="form-control"
                                            aria-describedby="passwordHelpInline">
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Пароль</label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="password" id="inputPassword6" class="form-control"
                                            aria-describedby="passwordHelpInline">
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
