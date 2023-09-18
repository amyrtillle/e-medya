<script setup lang="ts">
import { EmSocialSection, EmTextContent } from '../../components'
</script>

<template>
  <div class="sub-footer">
    <EmTextContent size="s" typo="secondary" text="©2023 E-medya" />
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
