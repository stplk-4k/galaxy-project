import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import Catalog from '../pages/CatalogPage.vue';
import Service from '../pages/ServicePage.vue';
import Contacts from '../pages/ContactsPage.vue';
import About from '../pages/AboutPage.vue';
import History from '../pages/HistoryPage.vue';
import Team from '../pages/TeamPage.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/catalog', name: 'Catalog', component: Catalog },
    { path: '/service', name: 'Service', component: Service },
    { path: '/contacts', name: 'Contacts', component: Contacts },
    { path: '/about', name: 'About', component: About },
    { path: '/history', name: 'History', component: History },
    { path: '/team', name: 'Team', component: Team },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
