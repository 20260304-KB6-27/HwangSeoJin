<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ route.fullPath }}</p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

console.log('라우터 객체:', router)
</script>