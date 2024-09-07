<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
}

.logo {
  height: 70px;
  width: auto;
}

nav {
  display: flex;
  gap: 1rem;
}

main {
  flex: 1;
  padding: 1rem;
}
</style>
