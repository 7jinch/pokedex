<template>
  <div id="nav-component" class="nav-component">
    <div id="menu-list" class="menu-list menu" @click="movePage('list')">
      포켓몬 리스트
    </div>
    <div>|</div>
    <div id="menu-like" class="menu-like menu" @click="movePage('like')">
      찜한 포켓몬
    </div>
    <div>|</div>
    <div
      id="menu-my-poke"
      class="menu-my-poke menu"
      @click="movePage('my-poke')"
    >
      나만의 포켓몬 만들기
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 페이지 이동
const movePage = (url) => {
  switch (url) {
    case 'list':
      router.push('/list');
      break;
    case 'like':
      router.push('/like');
      break;
    case 'my-poke':
      router.push('/my-poke');
      break;
  }
};
</script>

<style scoped>
.nav-component {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  gap: 20px;

  color: lightgray;
}

.menu {
  cursor: pointer;
  font-weight: bold;

  transition: transform 0.2s ease;
}

.menu:hover {
  transform: scale(1.1);
  color: gray;
}
</style>
