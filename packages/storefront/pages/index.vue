<script setup lang="ts">
import { EmButton, EmPortfolioSection, EmServiceSection, EmTextSection } from '@e-medya-web/components'

const serviceSection = {
  headline: 'Hizmetlerimiz',
  title: 'Hizmetlerimiz',
  cards: [
    {
      title: 'Web Tasarım',
      text: 'Web siteniz için en iyi tasarımı yaparız.',
      icon: 'play',
    },
    {
      title: 'Web Yazılım',
      text: 'Web siteniz için en iyi yazılımı yaparız.',
      icon: 'play',
    },
    {
      title: 'Web Danışmanlık',
      text: 'Web siteniz için en iyi danışmanlığı yaparız.',
      icon: 'play',
    },
  ],
}

const portfolioSection = {
  headline: 'Portfolyo',
  title: 'Portfolyo',
  images: [
    {
      src: 'https://picsum.photos/200/300',
      alt: 'random image',
      text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed vitae diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.'],
    },
    {
      src: 'https://picsum.photos/200/300',
      alt: 'random image',
      text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed vitae diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.'],
    },
    {
      src: 'https://picsum.photos/200/300',
      alt: 'random image',
      text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed vitae diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.'],
    },
  ],
  button: {
    label: 'Portfolyo',
    link: '#',
  },
}
</script>

<template>
  <main>
    <EmServiceSection v-bind="serviceSection" />
    <EmButton variant="secondary" label="Hizmetlerimiz" />
    <EmPortfolioSection
      v-bind="portfolioSection"
    />
    <EmTextSection />
    <EmButton variant="secondary" label="Hakkımızda" />
  </main>
</template>

<style scoped>
.em-button{
  margin: 50px 0
}

@media screen and (min-width: 1024px) {

}
</style>
