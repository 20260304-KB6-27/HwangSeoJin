<template>
  <div>
    이름 : <input type="text" v-model="name">
    <!-- (emit)name-change라는 이벤트로 외부(부모컴포넌트)로 보낼 수 있게 등록 -->
    <button @click="emit('name-change', {name})">이벤트 발신</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 1. 자식컴포넌트에서 이벤트 발생 (이벤트 이름 : change-name)
// 2. 부모 컴포넌트에서 이벤트 감지 (@name-change) -> 이때 이벤트 객체로 데이터를 전달 받을 수 있음
// 3. 부모 컴포넌트의 이벤트 핸들러 동작 (nameChangeHandler)
const name = ref('');
const emit = defineEmits(["name-change"])
</script>

<style lang="scss" scoped>

</style>