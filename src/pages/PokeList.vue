<template>
  <div id="poke-list-page" class="poke-list-page">
    <div id="poke-list" class="poke-list">
      <div class="poke-info" v-for="poke in pokeList" :key="poke.id">
        <PokeCard :poke="poke" />
      </div>
    </div>
    <div class="loader" ref="loader">로딩중...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
import PokeCard from '../components/PokeCard.vue';

const store = useStore(); // store 객체 생성
const { pokeList } = storeToRefs(store); // 상태값을 반응형 참조로 변환

const loading = ref(false);
const loader = ref(null);

const loadPokeData = async () => {
  if (loading.value) return;
  loading.value = true;
  store.getPokeList();
  loading.value = false;
};

const handleIntersect = (entries) => {
  if (entries[0].isIntersecting) {
    loadPokeData();
  }
};

onMounted(() => {
  // loadPokeData();
  const observer = new IntersectionObserver(handleIntersect);
  observer.observe(loader.value);
});
</script>

<style scoped>
.poke-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 90px;

  justify-items: center;
  align-items: center;

  width: 70vw;
}

.poke-info {
  position: relative;
}
</style>
