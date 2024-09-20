<template>
  <div id="poke-list-page" class="poke-list-page">
    <div id="poke-list" class="poke-list">
      <div class="poke-info" v-for="poke in pokeList" :key="poke.id">
        <PokeCard :poke="poke" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
import PokeCard from '../components/PokeCard.vue';

const store = useStore(); // store 객체 생성
const { pokeList } = storeToRefs(store); // 상태값을 반응형 참조로 변환
</script>

<style scoped>
.poke-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  width: 70vw;
}

.poke-info {
  margin: 0;
  padding: 0;

  background-color: white;
}
</style>
