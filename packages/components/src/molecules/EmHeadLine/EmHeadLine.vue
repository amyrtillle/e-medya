<script setup lang="ts">
import { EmTextContent } from '../../components'

import type { Variant } from '../../types'

const props = defineProps({
  text: {
    type: String,
    default: 'Headline title',
  },
  variant: {
    type: String as PropType<Variant>,
    default: 'primary',
  },
})
</script>

<template>
  <div class="headline">
    <hr v-if="variant === 'primary'">
    <EmTextContent tag="p" size="xs" typo="secondary" :text="text" variant="tertiary" />
    <hr v-if="variant === 'secondary'">
  </div>
</template>

<style scoped>
.headline{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--em-spacing-s);
  height: fit-content;
}
hr{
  margin: 0;
  width: 65px;
  height: 1px;
  color: var(--em-color-dark-purple);
}

.text-content{
  width: fit-content;
  text-align: left;
}
</style>
