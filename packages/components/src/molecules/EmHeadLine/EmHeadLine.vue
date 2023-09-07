<script setup lang="ts">
import { EmTextContent } from '../../components'

const props = defineProps({
  text: {
    type: String,
    default: 'Headline title',
  },
})
</script>

<template>
  <div class="headline">
    <hr>
    <EmTextContent tag="p" size="s" typo="secondary" :text="text" variant="tertiary" />
  </div>
</template>

<style scoped>
.headline{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--em-spacing-s)
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
