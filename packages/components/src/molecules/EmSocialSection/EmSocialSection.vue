<script setup lang="ts">
import { EmHeadLine, EmIcon } from '../../components'

const props = {
  list: [
    'instagram',
    'youtube',
    'linkedin',
  ],
}
</script>

<template>
  <div class="social-section">
    <EmHeadLine text="RESEAUX" variant="secondary" />
    <div v-for="src in props.list" class="social-icons">
      <a :href="`http://${src}.com/e-medya`">
        <EmIcon
          :src="src"
          :class="src"
          :alt="src"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.social-section{
  display: flex;
  align-items: center;
}

.social-icons{
  margin-left: var(--em-spacing-m)
}
</style>
