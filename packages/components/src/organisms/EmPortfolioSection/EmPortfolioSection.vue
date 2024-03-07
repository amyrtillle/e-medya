<script setup lang="ts">
import { EmButton, EmContentImage, EmSectionTitle } from '../../components'

defineProps<{
  headline: string
  title: string
  images: {
    src: string
    alt: string
    text: Array<string>
  }[]
  button: {
    label: string
    link: string
  }
}>()
</script>

<template>
  <section class="portfolio-section">
    <EmSectionTitle class="section-title" :headline="headline" :title="title" />
    <div class="images">
      <EmContentImage v-for="image in images" :key="image.text[0]" class="section-image" :src="image.src" :alt="image.alt" :text="image.text" />
    </div>
    <EmButton class="section-button" :link="button.link" :label="button.label" />
  </section>
</template>

<style scoped>
.portfolio-section{
  display: flex;
  flex-direction: column;
  gap: var(--em-spacing-l);
}

.images {
  display: flex;
  flex-direction: column;
  gap: var(--em-spacing-l);
  width: 100%;
}

.em-button{
  margin: 25px 0
}

@media screen and (min-width: 768px) {
  .images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .section-image:nth-child(2n+1) {
    grid-column: 2;
  }

  .section-image:nth-child(2){
    margin-top: -250px;
  }

  .section-button{
    margin-top: -150px;
  }
}
</style>
