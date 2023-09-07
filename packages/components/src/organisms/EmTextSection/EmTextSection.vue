<script setup lang="ts">
import { EmSectionTitle, EmTextContent } from '../../components'

const props = defineProps({
  headline: {
    type: String,
    default: 'Section title',
  },
  title: {
    type: String,
    default: 'Section text',
  },
  text: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquet. Sed vitae nisi eget nunc ultricies aliquet.',
  },
})
</script>

<template>
  <section class="text-section">
    <EmSectionTitle :headline="headline" :title="title" />
    <EmTextContent tag="p" :text="text" variant="secondary" size="s" />
  </section>
</template>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  gap: var(--em-spacing-l);
}
</style>
