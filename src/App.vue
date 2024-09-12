<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheLogo from './components/TheLogo.vue'
</script>

<template>
  <main>
    <RouterView />
  </main>
  <TheLogo />
</template>

<style scoped>
main {
  flex: 1;
  padding: 1rem;
}
@media (min-width: 640px) {
  main {
    padding: 2rem;
  }
}
</style>
