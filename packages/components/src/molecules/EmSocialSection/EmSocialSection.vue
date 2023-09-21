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
    <div class="social-icons-container">
      <a v-for="src in props.list" :href="`http://${src}.com/e-medya`" class="social-icons">
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
  flex-direction: column;
}

.social-icons-container{
  gap: var(--em-spacing-s);
  display: flex;
  flex-direction: row;
width: fit-content;
margin-top: var(--em-spacing-s);
}

@media screen and (min-width: 768px) {
.social-section{
  align-items: center;
  flex-direction: row;
}

.social-icons{
  margin-left: var(--em-spacing-m)
}

.social-icons-container{
  flex-direction: row;
  gap: 0;
  margin: 0;
}
}
</style>
