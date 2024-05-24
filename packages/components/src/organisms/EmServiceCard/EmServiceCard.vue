<script setup lang="ts">
import { EmIcon, EmTextContent } from '../../components'
import type { Icon } from '../../types'

defineProps<{
  title: string
  icon: Icon
  texts: string[]

}>()
</script>

<template>
  <div class="service-card">
    <EmIcon :src="icon" />
    <EmTextContent :text="title" tag="h2" typo="secondary" />
    <EmTextContent v-for="text in texts" :key="text" :text="text" tag="p" size="s" type="primary" />
  </div>
</template>

<style scoped>
.service-card{
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: var(--em-spacing-xs);
  border-style:solid;
  border-color: var(--em-color-purple-mountain-majesty);
}
</style>
