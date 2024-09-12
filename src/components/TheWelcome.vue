<script setup lang="ts">
import ThePanel from './ThePanel.vue'
</script>

<template>
  <ThePanel>
    <template #title>欢迎！</template>
    <p>欢迎来到我的个人网站！</p>
  </ThePanel>
</template>
<style scoped>
h5 {
  font-size: 1.5rem;
}
p {
  font-size: 1rem;
}
</style>
