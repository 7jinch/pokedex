import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia'; // 상태관리 라이브러리
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'; // pinia 플러그인 라이브러리
import { router } from './router/router.js'; // 라우터

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
  .use(pinia) // pinia 등록하기
  .use(router) // router 등록하기
  .mount('#app');
