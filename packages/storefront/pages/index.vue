<script setup lang="ts">
import { EmButton, EmFooter, EmHeaderSeparator, EmImageCard, EmMenu, EmNavBar, EmPortfolioSection, EmServiceSection, EmTextContent, EmTextSection } from '@e-medya-web/components'

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

const active = ref(false)
</script>

<template>
  <div class="layout">
    <header>
      <div class="nav">
        <img class="logo" src="../public/logo.svg" alt="E-Medya Web Logo">
        <EmMenu v-model:active="active" />
        <EmNavBar :class="{ active }" />
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
  </div>
</template>

<style scoped>
.layout {
  padding: var(--em-spacing-l);
  background-color: var(--em-color-white);
}

header {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--em-spacing-l);
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: var(--em-spacing-l);
  background-color: var(--em-color-white);
}

.nav .em-nav:not(.active) {
  display: none;
}

.nav .em-nav.active{
  display: flex;
  position: absolute;
  margin-top: 70px;
  right: 0;
  width: 80%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}

.nav .logo{
  height: 100%;
}

.nav .menu{
  display: flex;
  align-items: center;;
}
</style>
