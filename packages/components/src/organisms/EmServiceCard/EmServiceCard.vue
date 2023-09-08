<script setup lang="ts">
import { EmIcon, EmTextContent } from '../../components'

const props = defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  icon: {
    type: String,
  },

})
</script>

<template>
  <div class="service-card">
    <EmIcon :src="icon" />
    <EmTextContent :text="title" tag="h2" typo="secondary" />
    <EmTextContent :text="text" tag="p" size="s" type="primary" />
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
