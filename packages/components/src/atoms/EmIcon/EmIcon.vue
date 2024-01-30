<script setup lang="ts">
import type { IconProps } from '../../types'

defineProps<IconProps>()
</script>

<template>
  <div :class="{ [`i-em-${src}-icon`]: true }">
    <img :src="`assets/${src}.svg`" :alt="`${src}-icon`">
  </div>
</template>

<style scoped>
</style>
