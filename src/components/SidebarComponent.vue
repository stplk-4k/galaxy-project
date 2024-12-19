<template>
    <nav>
        <div id="sidebar">
            <div class="container">
                
                <ul class="sidebar-ul">
                    <li>
                        <router-link to="/about">О нас</router-link>
                    </li>
                    <li>
                        <router-link to="/history">История</router-link>
                    </li>
                    <li>
                        <router-link to="/team">Сотрудники</router-link>
                    </li>
                    <li>
                        <router-link to="/feedback">Отзывы</router-link>
                    </li>
                </ul>
                <div>
                    <input class="sidebar-search" type="text" v-model="searchString" placeholder="Поиск услуг..." @input="searchServices" />
                    <div v-if="filteredServices.length > 0">
                        <div class="sidebar-search-block" v-for="service in filteredServices" :key="service.id">
                            <router-link :to="`/${service.id}`">
                                <h3>{{ service.name }}</h3>
                                <p>{{ service.description }}</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="sidebar-searc-no-block" v-else-if="searchString !== ''">
                        <p class="sidebar-search-no">Нет результатов поиска.</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed } from 'vue';

const services = ref([
    { id: 'product-amm', name: '«Галактика AMM»', description: 'Постройте прибыльный и эффективный производственный процесс на любом предприятии' },
    { id: 'product-cpm', name: '«Галактика CPM', description: 'Достигайте совершенства в управлении финансами и принимайте решения в режиме реального времени' },
    { id: 'product-eam', name: '«Галактика EAM»', description: 'Снижайте стоимость владения активами и сокращайте затраты на их восстановление' },
    { id: 'product-erp', name: '«Галактика ERP»', description: 'Эффективно решайте текущие и стратегические управленческие задачи современного предприятия' },
    { id: 'product-ecm', name: '«Галактика ECM»', description: 'Управляйте документами и корпоративной информацией' },
    { id: 'product-esb', name: '«Галактика ESB»', description: 'Получайте все бизнес-данные в едином информационном пространстве' },
    { id: 'product-mes', name: '«Галактика MES»', description: 'Реализуйте планирование по операциям и диспетчеризацию внутри производственных подразделений' },
    { id: 'product-vuz', name: '«Галактика ВУЗ»', description: 'Управляйте учебным процессом и научной деятельностью университета' },
    { id: 'product-elms', name: '«Галактика eLMS»', description: 'Организуйте сквозной процесс обучения с возможностью интеграции с уже существующими системами' },
    { id: 'product-ruz', name: '«Галактика РУЗ»', description: 'Эффективно управляйте ресурсами вуза. Экономьте время при подготовке расписания учебных занятий' },
]);

const searchString = ref('');

const filteredServices = computed(() => {
    if (searchString.value === '') {
        return [];
    } else {
        return services.value.filter(service => {
            return Object.values(service).some(value => String(value).toLowerCase().includes(searchString.value.toLowerCase()));
        });
    }
});
</script>
