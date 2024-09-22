<template>
  <div id="loading-component" class="loading-component">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif"
    />
    <div id="loading-content" class="loading-content">로딩중...</div>
  </div>
</template>

<script setup></script>

<style scoped>
.loading-component {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;

  width: 75%;
  height: 50%;
}
</style>
