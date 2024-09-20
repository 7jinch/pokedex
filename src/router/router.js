import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from '../store/store.js';
import PokeList from '../pages/PokeList.vue';
import PokeLike from '../pages/PokeLike.vue';
import PokeMyList from '../pages/PokeMyList.vue';
import NotFound from '../pages/NotFound.vue';

export const router = createRouter({
  history: createWebHistory(), // 새로고침을 하지 않고 url을 동적으로 생성하는 히스토리 모드로 설정
  routes: [
    { path: '/', component: PokeList },
    { path: '/list', component: PokeList },
    { path: '/like', component: PokeLike },
    { path: '/my-poke', component: PokeMyList },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
});

// 전연 가드
// router.beforeEach((to, from, next) => {
//   const store = useStore(); // store 객체 생성
//   store.initSearchOption();
//   next();
// });
