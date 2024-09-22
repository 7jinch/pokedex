<template>
  <div class="frame" ref="frame">
    <div
      class="poke-card-component"
      ref="card"
      @mouseover="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="movePage"
    >
      <div class="poke-name-type-image">
        <div class="poke-name">{{ poke.name }}</div>
        <img
          class="poke-type-image"
          :src="
            poke.types
              ? returnTypeImage(poke.types)
              : '/types/question-mark.png'
          "
        />
      </div>
      <img class="poke-image" :src="poke.officialArtworkImageUrl" />
      <div class="light" ref="light"></div>
      <div class="shine" ref="shine"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../store/store.js';
import { returnTypeImage } from '../utils/returnTypeImage.js';

// props 받기
const props = defineProps({
  poke: Object,
});

// console.log(props.poke);

const router = useRouter(); // router 객체 생성
const store = useStore(); // store 객체 생성

const movePage = () => store.movePage(router, 'detail', props.poke.id);

const frame = ref(null);
const card = ref(null);
const light = ref(null);
const shine = ref(null);
const position = ref({ x: 0, y: 0, width: 0, height: 0 });

const updatePosition = () => {
  if (frame.value) {
    const rect = frame.value.getBoundingClientRect();
    position.value = {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    };
  }
};

const mouseMove = (event) => {
  // console.log(
  //   position.value.x,
  //   position.value.y,
  //   position.value.width,
  //   position.value.height
  // );

  // left, top: frame 요소의 왼쪽 상단 좌표
  const left = position.value.x;
  const top = position.value.y;

  // event.clientX, event.clientY: 뷰포트 기준 마우스 포인터의 실제 좌표
  // left + position.value.width / 2, top + position.value.height / 2: frame 요소의 중앙 좌표
  // centerX, centerY: 중앙에서 얼마나 떨어져 있는지 계산
  const centerX = event.clientX - (left + position.value.width / 2);
  const centerY = event.clientY - (top + position.value.height / 2);
  // console.log(centerX, centerY);

  const d = Math.sqrt(centerX ** 2 + centerY ** 2);

  card.value.style.transform = `rotate3d(
    ${-centerY / 100}, ${centerX / 100}, 0, ${d / 7}deg
  )`;

  const relativeX = event.clientX - left; // 마우스 X 좌표를 frame 내 상대 좌표로 변환
  const relativeY = event.clientY - top; // 마우스 Y 좌표를 frame 내 상대 좌표로 변환

  light.value.style.backgroundImage = `radial-gradient(
    circle at ${relativeX}px ${relativeY}px, #ffffff10, #ffffff00, #00000070
  )`;
};

const handleMouseEnter = () => {
  // console.log('mouse enter');
  updatePosition();
  frame.value.addEventListener('mousemove', mouseMove);
};

const handleMouseLeave = () => {
  // console.log('mouse leave');
  frame.value.removeEventListener('mousemove', mouseMove);
  card.value.style.transform = '';
  light.value.style.backgroundImage = ``;
};

onMounted(() => {
  updatePosition();
});

onBeforeUnmount(() => {
  if (frame.value) {
    frame.value.removeEventListener('mousemove', mouseMove);
  }
});
</script>

<style scoped>
.frame {
  display: flex;
  width: calc(300px / 1.6);
  height: 300px;

  margin: 0;
  padding: 0;

  transition: transform 0.2s;

  cursor: pointer;
}

.frame:hover {
  transform: scale3d(1.05, 1.05, 1.05);
}

.frame:hover .shine {
  /* display: none;*/
  height: 100%;
}

.poke-card-component {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  /* border: 1px solid black; */
  border-radius: 10px;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
}

.poke-name-type-image {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.poke-name {
  font-family: 'jua', sans-serif;
  font-weight: bold;
  font-size: larger;
  color: rgba(0, 0, 0, 0.7);
}

.poke-type-image {
  width: 15%;

  border-radius: 50%;
}

.poke-image {
  height: 70%;
}

.light {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.shine {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 107%;
  border-radius: 10px;

  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(192, 192, 192, 0.2) 45%,
    rgba(192, 192, 192, 0.3) 50%,
    transparent 55%
  );
  filter: brightness(1.1) opacity(0.8);
  mix-blend-mode: color-dodge;
  background-size: 150% 150%;
  background-position: 100%;
}
</style>
