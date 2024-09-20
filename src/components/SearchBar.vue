<template>
  <div id="search-component" class="search-component">
    <div id="searchPokeName-input-box" class="searchPokeName-input-box">
      <input
        id="searchPokeName-input"
        class="searchPokeName-input"
        type="text"
        v-model="searchPokeName"
        @input="store.updateSearchPokeName"
        placeholder="포켓몬을 검색해 보세요"
      />
    </div>
    <div
      id="search-icon-box"
      class="search-icon-box"
      @click="store.getPokeList"
    >
      <img
        id="search-icon"
        class="search-icon"
        src="/search.png"
        alt="search"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';

const store = useStore(); // store 객체 생성
const { searchPokeName } = storeToRefs(store); // 상태값을 반응형 참조로 변환
</script>

<style scoped>
.search-component {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 30px;

  height: 30px;
}

.searchPokeName-input-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  transition: transform 0.2s ease;
}

.searchPokeName-input {
  border: none; /* 기본 테두리 제거 */
  outline: none; /* 포커스 시 테두리 제거 */
  background: none;

  margin-left: 20px;
  margin-right: 20px;

  transition: transform 0.5s ease;
}

/* 해당 요소의 자식 요소에 포커스 시 */
.searchPokeName-input-box:focus-within {
  transform: scale(1.2);
  background: whitesmoke;
  border-bottom: none;
  border-radius: 10px;
}

.search-icon-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.search-icon {
  width: 30px;

  cursor: pointer;

  transition: transform 0.2s ease;
}

.search-icon:hover {
  transform: scale(1.2);
}
</style>
