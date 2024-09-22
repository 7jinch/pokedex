<template>
  <div id="app-container" class="app-container">
    <Header />
    <div id="main-container" class="main-container">
      <Loading id="loading" class="loading" v-if="loadData" />
      <FetchError id="error" class="error" v-if="fetchError" />
      <router-view v-if="!fetchError || !loadData" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from './store/store';
import Loading from './components/Loading.vue';
import Header from './components/Header.vue';
import FetchError from './components/FetchError.vue';

const store = useStore(); // store 객체 생성
const { loadData, fetchError } = storeToRefs(store); // 상태값을 반응형 참조로 변환
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
}

.loading {
  position: absolute;
  margin: 0;
  padding: 0;

  width: 100%;
  height: 50%;
  background-color: white;

  z-index: 1000;

  /*
  top: 0;
  left: 0;*/
}
</style>
