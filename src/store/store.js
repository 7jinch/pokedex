import { defineStore } from 'pinia';
import { state } from './state';
import { actions } from './actions';

export const useStore = defineStore('store', {
  state, // 상태값
  actions, // 상태값을 변경하는 액션
  // persist: {
  //   enable: true, // pinia의 상태값을 저장하기
  //   strategies: [{ storage: localStorage }], // 로컬스토리지에 저장하기
  // },
});
