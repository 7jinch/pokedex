<template>
  <div class="frame" ref="frame">
    <div
      class="poke-card-component"
      ref="card"
      @mouseover="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="poke-name">{{ poke.name }}</div>
      <img class="poke-image" :src="poke.officialArtworkImageUrl" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// props 받기
const props = defineProps({
  poke: Object,
});

const frame = ref(null);
const card = ref(null);
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

const mouseMove = () => {
  console.log(
    position.value.x,
    position.value.y,
    position.value.width,
    position.value.height
  );

  const left = position.value.x;
  const top = position.value.y;
  const centerX = left - position.value.width / 2;
  const centerY = top - position.value.height / 2;
  const d = Math.sqrt(centerX ** 2 + centerY ** 2);

  card.value.style.transform;
};

const handleMouseEnter = () => {
  console.log('Mouse entered the card');
  mouseMove();
};

const handleMouseLeave = () => {
  console.log('Mouse left the card');
  mouseMove();
};

onMounted(() => {
  updatePosition();
});
</script>

<style scoped>
.frame {
  position: relative;
  width: calc(280px / 1.5);
  height: 280px;

  transition: transform 0.2s;

  z-index: 1;
}

.frame:hover {
  transform: scale3d(1.05, 1.05, 1.05);

  z-index: 1000;
}

.poke-card-component {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 10px;

  border: 1px solid black;
  border-radius: 10px;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
}

.poke-name {
}

.poke-image {
  height: 70%;
}
</style>
