import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import Catalog from '../pages/CatalogPage.vue';
import Service from '../pages/ServicePage.vue';
import Contacts from '../pages/ContactsPage.vue';
import About from '../pages/AboutPage.vue';
import History from '../pages/HistoryPage.vue';
import Team from '../pages/TeamPage.vue';
import ProductAmm from '../pages/products/ProductAmm.vue';
import ProductCpm from '@/pages/products/ProductCpm.vue';
import ProductEam from '@/pages/products/ProductEam.vue';
import ProductErp from '@/pages/products/ProductErp.vue';
import ProductEcm from '@/pages/products/ProductEcm.vue';
import ProductEsb from '@/pages/products/ProductEsb.vue';
import ProductMes from '@/pages/products/ProductMes.vue';
import ProductVuz from '@/pages/products/ProductVuz.vue';
import ProductElms from '@/pages/products/ProductElms.vue';
import ProductRuz from '@/pages/products/ProductRuz.vue';
import FeedbackPage from '@/pages/FeedbackPage.vue';
import RegistrationPage from '@/pages/RegistrationPage.vue';
import EnterPage from '@/pages/EnterPage.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/catalog', name: 'Catalog', component: Catalog },
    { path: '/service', name: 'Service', component: Service },
    { path: '/contacts', name: 'Contacts', component: Contacts },
    { path: '/about', name: 'About', component: About },
    { path: '/history', name: 'History', component: History },
    { path: '/team', name: 'Team', component: Team },
    { path: '/product-amm', name: 'ProductAmm', component: ProductAmm },
    { path: '/product-cpm', name: 'ProductCpm', component: ProductCpm },
    { path: '/product-eam', name: 'ProductEam', component: ProductEam },
    { path: '/product-erp', name: 'ProductErp', component: ProductErp },
    { path: '/product-ecm', name: 'ProductEcm', component: ProductEcm },
    { path: '/product-esb', name: 'ProductEsb', component: ProductEsb },
    { path: '/product-mes', name: 'ProductMes', component: ProductMes },
    { path: '/product-vuz', name: 'ProductVuz', component: ProductVuz },
    { path: '/product-elms', name: 'ProductElms', component: ProductElms },
    { path: '/product-ruz', name: 'ProductRuz', component: ProductRuz },
    { path: '/feedback', name: 'FeedbackPage', component: FeedbackPage },
    { path: '/registration', name: 'RegistrationPage', component: RegistrationPage },
    { path: '/enter', name: 'EnterPage', component: EnterPage },

  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;
