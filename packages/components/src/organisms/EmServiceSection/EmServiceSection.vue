<script setup lang="ts">
import { EmSectionTitle, EmServiceCard } from '../../components'

const props = defineProps<{
  headline: string
  title: string
  cards: {
    title: string
    texts: Array<{
      text: string
    }>
    icon: string
  }[]

}>()
</script>

<template>
  <section class="service-section">
    <EmSectionTitle class="section-title" :headline="headline" :title="title" />
    <div class="cards">
      <EmServiceCard v-for="card in cards" :key="card.title" class="section-card" :icon="card.icon" :texts="card.texts" :title="card.title" />
    </div>
  </section>
</template>

<style scoped>
.service-section{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--em-spacing-3xl)
}

.cards{
  display: flex;
  flex-direction: column;
  gap: var(--em-spacing-4xl);
  width: 100%;
  height: 100%;
}

.section-card{
  width: 100%;
  height: 100%;
  gap: var(--em-spacing-xl);
}

@media screen and (min-width: 768px) {
.cards{
    flex-direction: row;
  }
}
</style>
