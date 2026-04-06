<template>
  <button @click="incrememt">좋아요 누르기 </button>
</template>

<script setup>
// import { useLikeStore } from '@/stores/like';
import { useLikePersistStore } from '@/stores/persist/persist_like';

const { incrememt } = useLikePersistStore(); 
</script>

<style scoped></style>
