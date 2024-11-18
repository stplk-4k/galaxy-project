import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Vuex хранилище
import { createMetaManager } from 'vue-meta'
import './assets/styles/global.css';

const app = createApp(App);
const metaManager = createMetaManager();
app.use(router);
app.use(store);
app.use(metaManager);
app.mount('#app');