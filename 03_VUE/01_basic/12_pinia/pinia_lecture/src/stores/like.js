import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

/*
Pinia
- Vue3에서 사용하는 상태 관리 라이브러리 
- 전역 상태(반응형 데이터들)를 관리 할 수 있다.

1. state -> 데이터
2. getters -> 계산된 값
3. actions -> 함수 (비즈니스로직) API 요청, state 변경하는 함수 등 
*/
export const useLikeStore = defineStore('like', () => {
  // state
  const like = ref(Number(sessionStorage.getItem('like-session') || 0));

  // getters
  // 여러 컴포넌트에서 사용하는(공유되는) 계산값
  const fivetime = computed(() => like.value * 5);

  // actions
  function incrememt() {
    like.value++;

    /* 
    sessionStorage
    - 현재 '탭'에서만 유지됨 (임시 데이터, 일회성 상태)
    */
    sessionStorage.setItem('like-session', like.value);
  }

  return { like, incrememt, fivetime };
});
