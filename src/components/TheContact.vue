<script setup lang="ts">
import ThePanel from './ThePanel.vue'
</script>

<template>
  <ThePanel>
    <template #title>联系方式</template>
    <ul>
      <li>
        邮箱：<a class="text-blue-500" href="mailto:future1024.it@gmail.com"
          >future1024.it@gmail.com</a
        >
      </li>
      <li>
        个人主页：<a class="text-blue-500" href="https://howardwzh.github.io"
          >howardwzh.github.io</a
        >
      </li>
      <li>
        GitHub：<a class="text-blue-500" href="https://github.com/howardwzh"
          >github.com/howardwzh</a
        >
      </li>
    </ul>
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
