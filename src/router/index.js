import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import Catalog from '../pages/Catalog.vue';
import Service from '../pages/Service.vue';
import Contacts from '../pages/Contacts.vue';
import About from '../pages/About.vue';
import History from '../pages/History.vue';
import Team from '../pages/Team.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', 
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/catalog', name: 'Catalog', component: Catalog },
    { path: '/services', name: 'Service', component: Service },
    { path: '/contacts', name: 'Contacts', component: Contacts },
    { path: '/about', name: 'About', component: About },
    { path: '/history', name: 'History', component: History },
    { path: '/team', name: 'Team', component: Team },
  ],
});
