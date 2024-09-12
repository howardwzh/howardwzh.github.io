<script setup lang="ts">
import ThePanel from './ThePanel.vue'
import SkillCard from './SkillCard.vue'
import IconVue from './icons/IconVue.vue'
import IconReact from './icons/IconReact.vue'
import IconFlutter from './icons/IconFlutter.vue'
import IconJest from './icons/IconJest.vue'
import IconPython from './icons/IconPython.vue'

const skills = [
  {
    icon: IconReact,
    name: 'React',
    // status: '提升中',
    details: [
      { label: '熟练度', value: '4' },
      { label: '使用时间', value: '3年' },
      { label: '个人项目', value: '项目1，项目2' }
    ]
  },
  {
    icon: IconVue,
    name: 'Vue',
    // status: '提升中',
    details: [
      { label: '熟练度', value: '4' },
      { label: '使用时间', value: '3年' },
      { label: '个人项目', value: '项目1，项目2' },
      { label: '沉淀', value: 'storybook' }
    ]
  },
  {
    icon: IconFlutter,
    name: 'Flutter',
    status: '提升中',
    details: [
      { label: '熟练度', value: '2' },
      { label: '使用时间', value: '0.5年' },
      { label: '个人项目', value: '项目1，项目2' }
    ]
  },
  {
    icon: IconJest,
    name: 'Jest',
    status: '提升中',
    details: [
      { label: '熟练度', value: '2' },
      { label: '使用时间', value: '0.5年' },
      { label: '个人项目', value: '项目1，项目2' }
    ]
  },
  {
    icon: IconPython,
    name: 'Python',
    status: '提升中',
    details: [
      { label: '熟练度', value: '2' },
      { label: '使用时间', value: '0.5年' },
      { label: '个人项目', value: '项目1，项目2' }
    ]
  }
  // ... Add similar objects for React, Flutter, Jest, and Python
]
</script>
<template>
  <ThePanel>
    <template #title>技术栈</template>
    <div class="flex flex-wrap gap-4">
      <SkillCard v-for="(skill, index) in skills" :key="index">
        <template #icon>
          <component class="w-16" :is="skill.icon" />
        </template>
        <template #heading>
          <b>{{ skill.name }}</b>
          <span class="text-sm text-gray-500 pl-2" v-if="skill.status"
            >({{ skill.status }})</span
          ></template
        >
        <ul class="list-disc pl-5">
          <li v-for="(detail, detailIndex) in skill.details" :key="detailIndex">
            {{ detail.label }}:
            <template v-if="detail.label === '熟练度'">
              <span v-for="n in parseInt(detail.value)" :key="`star-${n}`">★</span>
              <span v-for="n in 5 - parseInt(detail.value)" :key="`empty-star-${n}`">☆</span>
            </template>
            <template v-else>
              {{ detail.value }}
            </template>
          </li>
        </ul>
      </SkillCard>
      <SkillCard v-for="n in 3" :key="`empty-${n}`"></SkillCard>
    </div>
  </ThePanel>
</template>
