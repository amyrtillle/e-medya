<script setup lang="ts">
import { EmTextContent } from '../../components';
import type { TextContentProps } from '../../types'

withDefaults(defineProps<TextContentProps>(), {
  text: 'text'
})
</script>

<template>
  <EmTextContent tag="p" class="em-note typo-primary variant-secondary s" :text="text" />
</template>

<style scoped>
.em-note{
  border: 2px solid var(--em-color-libery);
  width: fit-content;
  padding: var(--em-spacing-xs);
}
</style>
