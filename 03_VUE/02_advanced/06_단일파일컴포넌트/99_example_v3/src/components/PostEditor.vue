<template>
  <div id="editing">
    <div>
      <input
        id="editing-title"
        type="text"
        v-model="editTitle"
        class="form-control mb-2"
        @click.stop
      />
    </div>
    <div>
      <textarea
        id="editing-content"
        v-model="editContent"
        class="form-control mb-2"
        @click.stop
      ></textarea>
    </div>
    <button @click.stop="edit(editTitle, editContent)">저장</button>
    <button @click.stop="cancelEdit">취소</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ title: String, content: String });

const editTitle = ref(props.title);
const editContent = ref(props.content);

const emit = defineEmits(['edit']);

const edit = (title, content) => {
  emit('edit', { title, content });
};
</script>

<style lang="scss" scoped></style>