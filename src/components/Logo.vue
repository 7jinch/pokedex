<template>
  <div id="logo" class="logo">
    <router-link to="/">
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
      />
    </router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.logo {
  cursor: pointer;

  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.1);
}
</style>
