<script setup lang="ts">
import { EmButton, EmFooter, EmHeaderSeparator, EmImageCard, EmNavBar, EmPortfolioSection, EmServiceSection, EmTextContent, EmTextSection } from '@e-medya-web/components'

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
  <header>
    <div class="nav">
      <img src="../public/logo.svg" alt="E-Medya Web Logo">
      <EmNavBar />
    </div>
    <EmTextContent text="E-Medya Web" tag="h1" typo="primary" />
    <EmTextContent text="E-Medya Web" tag="h2" typo="secondary" />
    <EmImageCard src="https://picsum.photos/200/300" alt="random image" />
    <EmHeaderSeparator />
  </header>
  <main>
    <EmServiceSection v-bind="serviceSection" />
    <EmButton label="Hizmetlerimiz" />
    <EmPortfolioSection
      v-bind="portfolioSection"
    />
    <EmTextSection />
    <EmButton label="Hakkımızda" />
  </main>
  <footer>
    <EmFooter />
  </footer>
</template>

<style scoped>

</style>
