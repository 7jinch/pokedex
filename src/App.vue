<template>
  <div id="app-container" class="app-container">
    <Header />
    <div id="main-container" class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
}
</style>
