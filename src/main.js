import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store'; // Vuex хранилище
import { createMetaManager } from 'vue-meta';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap'; // для js
// import 'bootstrap/dist/js/bootstrap.esm.js';
import './assets/styles/global.css';
import axios from 'axios';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
const metaManager = createMetaManager();
app.config.globalProperties.axios = axios;
app.use(router);
// app.use(store);
app.use(metaManager);
app.mount('#app');