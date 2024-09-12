<script setup lang="ts">
import ThePanel from './ThePanel.vue'
</script>

<template>
  <ThePanel>
    <template #title>自我介绍</template>
    <h5>My name is Howard Wang.</h5>
    <p>
      我是一名具有14年经验的高级前端工程师，专注于使用React、Vue等前端框架构建高性能的Web应用程序。我擅长于实现复杂的交互界面、优化性能，以及与设计和后端团队紧密合作，推动产品开发。我的工作不仅提升了用户体验，还通过性能优化显著提高了产品的响应速度和可维护性。我热衷于学习新技术，并通过个人网站和github总结记录我的经验。
    </p>
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
