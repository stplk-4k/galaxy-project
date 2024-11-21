<template>
  <div id="app">
    <HeaderComponent />
    <MenuComponent />
    <router-view></router-view>
  </div>
</template>


<script setup>
  import HeaderComponent from './components/HeaderComponent.vue';
  import MenuComponent from './components/MenuComponent.vue';
</script>


<style>

</style>
