<template>
  <h1>v-model 테스트</h1>
  <hr />
  <BaseInput
    v-model="modelValue"
    label="닉네임"
    placeholder="닉네임을 입력해주세요"
  >
  </BaseInput>

  <BaseInput
    v-model="firstname"
    label="성"
    placeholder="성을 입력해주세요"
  >
  </BaseInput>

  <BaseInput
    v-model="lastname"
    label="이름"
    placeholder="이름을 입력해주세요"
  >
  </BaseInput>

  <p>
    닉네임 : <strong>{{ modelValue }}</strong>
  </p>

  <p>전체 이름 : <strong>{{ firstname }} {{ lastname }}</strong></p>
</template>

<script setup>
import BaseInput from './components/BaseInput.vue';
import { ref } from 'vue';

// 입력받을 반응형 데이터
const modelValue = ref('');
const firstname = ref('');
const lastname = ref('');
</script>

<style scoped></style>
