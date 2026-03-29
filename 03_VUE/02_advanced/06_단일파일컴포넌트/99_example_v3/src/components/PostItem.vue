<template>
  <li class="post-item" @click="toggleContent">
    <h2>
      <div>{{ length - index }}. {{ post.title }}</div>
      <div id="toggle">{{ selected ? '▲' : '▼' }}</div>
    </h2>
    <div v-if="selected" class="post-content">
      <div v-if="editing">
        <PostEditor
          @edit="editHandler"
          :title="post.title"
          :content="post.content"
        />
      </div>
      <div v-else>
        <h1>{{ post.title }}</h1>
        <div class="mb-3">{{ post.content }}</div>
        <button @click.stop="closeContent">닫기</button>
        <button @click.stop="editingContent">수정</button>
        <button @click.stop="deleteContent(post.no)">삭제</button>
      </div>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue';
import PostEditor from './PostEditor.vue';

const props = defineProps({
  post: {
    type: Object,
  },
  index: Number,
  length: Number,
});

const selected = ref(false);
const editing = ref(false);

const emit = defineEmits(['delete', 'edit']);

const editHandler = (editContent) => {
  const no = props.post.no;
  emit('edit', { ...editContent, no });
  editing.value = false;
};

const toggleContent = () => {
  selected.value = !selected.value;
};

const editingContent = () => {
  editing.value = true;
};

const closeContent = () => {
  selected.value = false;
};

const deleteContent = (no) => {
  emit('delete', no);
};
</script>

<style lang="scss" scoped></style>