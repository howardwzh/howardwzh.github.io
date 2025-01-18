<script setup lang="ts">
import ThePanel from './ThePanel.vue'
import SkillCard from './SkillCard.vue'
import IconReact from './icons/IconReact.vue'
import IconNext from './icons/IconNext.vue'
import IconVue from './icons/IconVue.vue'
import IconNuxt from './icons/IconNuxt.vue'
import IconFlutter from './icons/IconFlutter.vue'
import IconGo from './icons/IconGo.vue'
import IconPython from './icons/IconPython.vue'
import IconTypescript from './icons/IconTypescript.vue'
import IconNestjs from './icons/IconNestjs.vue'

interface Skill {
  icon: any
  name: string
  status?: string
  details: { label?: string; value: string; link?: string }[]
}

const skills: Skill[] = [
  {
    icon: IconReact,
    name: 'React',
    details: [
      { label: '熟练度', value: '4' },
      { label: '使用时间', value: '3年' },
      { value: 'storybook', link: '/storybook-react/' }
      // { label: '个人项目', value: '项目1，项目2' }
    ]
  },
  {
    icon: IconVue,
    name: 'Vue',
    details: [
      { label: '熟练度', value: '4' },
      { label: '使用时间', value: '3年' },
      { value: 'storybook', link: '/storybook-vue3/' }
      // { label: '个人项目', value: '项目1，项目2' }
    ]
  },
  {
    icon: IconTypescript,
    name: 'Typescript',
    status: '提升中',
    details: [
      { label: '熟练度', value: '2' },
      { label: '使用时间', value: '0.5年' }
    ]
  },
  {
    icon: IconNext,
    name: 'Next.js',
    status: '提升中',
    details: [
      { label: '熟练度', value: '1' },
      { label: '使用时间', value: '0.1年' }
    ]
  },
  {
    icon: IconNuxt,
    name: 'Nuxt.js',
    status: '提升中',
    details: [
      { label: '熟练度', value: '1' },
      { label: '使用时间', value: '0.2年' }
    ]
  },
  {
    icon: IconFlutter,
    name: 'Flutter',
    status: '提升中',
    details: [
      { label: '熟练度', value: '2' },
      { label: '使用时间', value: '0.5年' }
    ]
  },
  {
    icon: IconGo,
    name: 'Go',
    status: '提升中',
    details: [
      { label: '熟练度', value: '1' },
      { label: '使用时间', value: '0.1年' }
    ]
  },
  {
    icon: IconNestjs,
    name: 'Nestjs (Node)',
    status: '提升中',
    details: [
      { label: '熟练度', value: '1' },
      { label: '使用时间', value: '0.1年' }
    ]
  },
  {
    icon: IconPython,
    name: 'Python',
    status: '提升中',
    details: [
      { label: '熟练度', value: '2' },
      { label: '使用时间', value: '0.5年' }
    ]
  }
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
            <template v-if="detail.label">{{ detail.label }}: </template>
            <template v-if="detail.label === '熟练度'">
              <span v-for="n in parseInt(detail.value)" :key="`star-${n}`">★</span>
              <span v-for="n in 5 - parseInt(detail.value)" :key="`empty-star-${n}`">☆</span>
            </template>
            <template v-else-if="detail.link">
              <a :href="detail.link" class="text-blue-500 hover:underline">
                {{ detail.value }}
              </a>
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
