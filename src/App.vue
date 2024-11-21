<template>
  <div id="app">
    <HeaderComponent />
    <MenuComponent />


    <div class="container">
      <div class="main-app">
        <div class="row align-items-start">
          <div class="col-sm-3">
            <SidebarComponent />
          </div>
          <div class="col-sm-9">
            <router-view></router-view>
          </div>
        </div>
        

        
      </div>
    </div>
  </div>
</template>


<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
</script>


<style></style>
