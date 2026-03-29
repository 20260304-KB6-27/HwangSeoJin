<template>
  <div class="d-flex input-group">
    <span class="me-3">
      <input
        type="text"
        class="form-control"
        placeholder="새 게시글 제목"
        v-model="title"
      />
    </span>
    <span class="me-3">
      <input
        type="text"
        class="form-control"
        placeholder="새 게시글 내용"
        v-model="content"
      />
    </span>
    <button @click="createContent">작성</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const content = ref('');

const emit = defineEmits(['add']);

const createContent = () => {
  if (title.value < 1 || content.value < 1) return;

  emit('add', {
    no: new Date().getTime(),
    title: title.value,
    content: content.value,
  });

  title.value = '';
  content.value = '';
};
</script>

<style lang="scss" scoped></style>