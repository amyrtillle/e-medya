<script setup lang="ts">
import { EmFooterContent, EmSubFooter } from '../../components'

const props = defineProps<{
  cgv: string
  cgu: string
}>()
</script>

<template>
  <div class="footer">
    <hr>
    <EmFooterContent />
    <hr>
    <EmSubFooter :cgv="cgv" :cgu="cgu" />
  </div>
</template>

<style scoped>
.footer{
  display: flex;
  flex-direction: column;
  gap: var(--em-spacing-xl);
}

hr{
  margin: 0;
  width: 100%;
  height: 1px;
  color: var(--em-color-dark-purple);
}
</style>
