<template>
  <div id="header-component" class="header-component">
    <Logo />
    <SearchBar />
    <Nav />
  </div>
</template>

<script setup>
import Logo from './Logo.vue';
import SearchBar from './SearchBar.vue';
import Nav from './Nav.vue';
</script>

<style scoped>
.header-component {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
}
</style>
