<template>
  <div @click="test">테스트 버튼</div>

  <div id="poke-info-page" class="poke-info-page">
    <div id="prev-next-poke" class="prev-next-poke">
      <div
        id="prev-poke"
        class="prev-poke"
        @click="prevPokeInfo('prev')"
        v-if="pokeInfo.id !== 1"
      >
        이전 포켓몬
      </div>
      <div id="next-poke" class="next-poke" @click="prevPokeInfo('next')">
        다음 포켓몬
      </div>
    </div>
    <div id="poke-info-container" class="poke-info-container">
      <div id="poke-image" class="poke-image">
        <img :src="pokeInfo.officialArtworkImageUrl" />
      </div>
      <div id="poke-info-box" class="poke-info-box">
        <div id="poke-id" class="poke-id">No. {{ pokeInfo.id }}</div>
        <div id="poke-name" class="poke-name">{{ pokeInfo.name }}</div>
        <div id="poke-flavor-text" class="poke-flavor-text">
          {{ pokeInfo.flavorText }}
        </div>
        <div id="poke-info-mini-box" class="poke-info-mini-box">
          <div id="upper-box" class="upper-box mini-box">
            <div id="poke-type-box" class="poke-type-box">
              <div id="poke-type-title" class="poke-type-title">타입</div>
              <div id="poke-type" class="poke-type">
                <div
                  class="poke-type-in"
                  v-for="(type, i) in pokeInfo.types"
                  :key="type"
                >
                  {{ type }}
                  <div v-if="i !== pokeInfo.types.length - 1">,&nbsp;</div>
                </div>
              </div>
            </div>
            <div id="poke-weight-box" class="poke-weight-box">
              <div id="poke-weight-title" class="poke-weight-title">몸무게</div>
              <div id="poke-weight-title" class="poke-weight-title">
                {{ pokeInfo.weight }}kg
              </div>
            </div>
            <div id="poke-height-box" class="poke-height-box">
              <div id="poke-height-title" class="poke-height-title">키</div>
              <div id="poke-height" class="poke-height">
                {{ pokeInfo.height }}m
              </div>
            </div>
            <div id="poke-genera-box" class="poke-genera-box">
              <div id="poke-genera-title" class="poke-genera-title">분류</div>
              <div id="poke-genera" class="poke-genera">
                {{ pokeInfo.genera }}
              </div>
            </div>
          </div>
          <div id="bottom-box" class="bottom-box mini-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '../store/store';
import { storeToRefs } from 'pinia';

const route = useRoute(); // route 객체 생성(router 아님)
const store = useStore(); // store 객체 생성
const { pokeInfo } = storeToRefs(store);

const test = () => {
  console.log(pokeInfo.value.genera);
};

const prevPokeInfo = (keyword) => {
  switch (keyword) {
    case 'prev':
      store.getPokeInfo(Number(pokeInfo.value.id) - 1);
      break;
    case 'next':
      store.getPokeInfo(Number(pokeInfo.value.id) + 1);
      break;
  }
};

onMounted(() => {
  store.getPokeInfo(route.params.id);
});
</script>

<style>
.poke-info-page {
  display: flex;
  flex-direction: column;

  width: 95vw;
}

.prev-next-poke {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
}

.poke-info-container {
  display: flex;
  flex-direction: row;
}

.poke-image {
  flex: 1;
}

.poke-info-box {
  flex: 1;
}

.mini-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.poke-type {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.poke-type-in {
  display: flex;
  flex-direction: row;
}
</style>
