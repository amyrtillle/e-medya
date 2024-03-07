<script setup lang="ts">
import { EmFooter, EmHeaderSeparator, EmImageCard, EmMenu, EmNavBar, EmTextContent } from '@e-medya-web/components'

const menuActive = ref(false)
</script>

<template>
  <div class="layout">
    <header>
      <div class="nav">
        <a class="logo" href="/">
          <img class="logo" src="../public/logo.svg" alt="E-Medya Web Logo">
        </a>
        <EmMenu v-model:active="menuActive" />
        <EmNavBar :class="{ menuActive }" />
      </div>
      <div class="text-header">
        <EmTextContent text="E-Medya Web" tag="h1" typo="primary" />
        <EmTextContent text="E-Medya Web" tag="p" typo="secondary" />
      </div>
      <div class="graphic-header">
        <EmImageCard src="https://picsum.photos/200/300" alt="random image" />
        <EmHeaderSeparator />
      </div>
    </header>
    <slot />
    <footer :class="{ menuActive }">
      <EmFooter />
    </footer>
  </div>
</template>

<style scoped>
.layout {
  padding: var(--em-spacing-l);
  background-color: var(--em-color-white);
  gap: var(--em-spacing-l);
  display: flex;
  flex-direction: column;
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

.nav .em-nav:not(.menuActive) {
  opacity: 0;
  right: -100%;
  margin-top: 70px;
  transition: 0.5s ease-in-out;
  width: 80%;
  position: absolute;
}

.nav .em-nav.menuActive{
  opacity: 1;
  display: flex;
  position: absolute;
  margin-top: 70px;
  right: 0;
  width: 80%;
  transition: 0.5s ease-in-out;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.nav .logo{
  height: 100%;
}

.nav .menu{
  display: flex;
  align-items: center;;
}

.text-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--em-spacing-xl);
}

.graphic-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--em-spacing-xs);
  width: 100%;
}

.graphic-header .separator {
  width: 100%;
  height: 50px;
}

@media screen and (min-width: 1024px) {
  .nav .em-nav, .nav .em-nav:not(.menuActive) {
  display: flex;
  position: relative;
}
.nav .menu{
  display: none;
}

.nav{
  justify-content: space-between;
}

.nav .em-nav{
  width: fit-content;
  left: 0;
  opacity: 100% !important;
  margin: 0 !important;
  justify-content: flex-end;
  margin-top: 0;
}

.graphic-header .em-image-card{
  aspect-ratio: 5/7;
}

}
</style>
