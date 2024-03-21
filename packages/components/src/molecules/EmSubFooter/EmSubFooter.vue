<script setup lang="ts">
import { EmSocialSection, EmTextContent } from '../../components'

const props = defineProps<{
  cgv: string
  cgu: string
}>()
</script>

<template>
  <div class="sub-footer">
    <EmTextContent size="s" typo="secondary" text="©2024 E-medya" />
    <EmTextContent tag="a" size="s" typo="secondary" text="Conditions générales d'utilisations" :href="cgu" />
    <EmTextContent tag="a" size="s" typo="secondary" text="Conditions générales de vente" :href="cgv" />
    <EmSocialSection />
  </div>
</template>

<style scoped>
.sub-footer {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: var(--em-spacing-xl);
}

@media screen and (min-width: 768px) {

  .sub-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
