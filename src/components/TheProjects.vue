<script setup lang="ts">
import ThePanel from './ThePanel.vue'
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    name: '社群平台',
    // link: '',
    intro:
      '一个面对世界各地人们的无偏见社群平台，尽最大努力为用户提供最好的软件质量，让任何人都可以自由地表达自己的意见',
    highlight:
      '主要使用 React + Stream + Quilljs，参与项目开发迭代，主要负责模块有发帖、评论、引用转发、私密聊天等，同时也负责了其他模块的需求开发和维护'
  },
  {
    name: '广州信易贷',
    link: 'https://www.xinyidaigz.com/',
    intro:
      '依托全国信用信息共享平台归集的公共信用信息，以大数据、智能风控等金融科技为支撑，以信用为核心要素，深化信用信息共享',
    highlight:
      '前端的架构从传统的技术转到了业界流行的MVVM框架；同时前端构建项目也全面Jenkins自动化了；在前后端分离上推荐的Yapi方案也得到了大家的支持和收到了较好的效果；后台调研的vue-element-admin框架所搭建的多个项目开发效率和运行效果都较好。'
  }
]
</script>
<template>
  <ThePanel>
    <template #title>项目展示</template>
    <div class="flex flex-wrap gap-4">
      <ProjectCard v-for="(project, index) in projects" :key="index">
        <h5 class="text-xl font-bold">
          {{ project.name }} <span v-if="project.status">({{ project.status }})</span>
        </h5>
        <p class="text-sm text-gray-500">{{ project.intro }}</p>
        <p class="text-base">{{ project.highlight }}</p>
      </ProjectCard>
      <ProjectCard v-for="n in 3" :key="`empty-${n}`"></ProjectCard>
    </div>
  </ThePanel>
</template>
