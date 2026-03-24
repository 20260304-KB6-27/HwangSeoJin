<template>
  <div>
    <h2>App Component</h2>
    <hr />
    <InputName @name-change="nameChangeHandler"></InputName>
    <h3>App Data : {{ parentName }}</h3>
  </div>
</template>

<script setup>
import InputName from './components/InputName.vue';
import { ref } from 'vue';

const parentName = ref('기본값');
const nameChangeHandler = (event) => {
  parentName.value = event.name;
}
</script>

<style lang="scss" scoped></style>
