<script setup lang="ts">
import { EmHeadLine, EmTextContent } from '../../components'

const props = defineProps({
  headline: {
    type: String,
    default: 'Section title',
  },
  title: {
    type: String,
    default: 'Section text',
  },
})
</script>

<template>
  <div>
    <EmHeadLine variant="primary" :text="headline" />
    <EmTextContent tag="h2" :text="title" variant="primary" />
  </div>
</template>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--em-spacing-l);
}
</style>
