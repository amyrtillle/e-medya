<script setup lang="ts">
import type { TextContentProps } from '../../types'

defineProps<TextContentProps>()
</script>

<template>
  <component :is="tag" :class="typo">
    {{ text }}
  </component>
</template>

<style scoped>
.typo-primary {
  font-family: var(--em-typography-font-family-primary)
}

.typo-secondary {
  font-family: var(--em-typography-font-family-secondary)
}
</style>
