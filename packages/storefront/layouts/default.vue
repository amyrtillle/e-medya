<script setup lang="ts">
import { EmFooter, EmMenu, EmNavBar } from '@e-medya-web/components'

const menuActive = ref(false)
const assets = useRuntimeConfig().public.assets

const conditions = {
  cgv: `${assets.documents}cgv.pdf`,
  cgu: `${assets.documents}cgu.pdf`,
}
</script>

<template>
  <div class="layout">
    <header>
      <div class="nav">
        <a class="logo" href="/">
          <img class="logo" src="/logo.png" alt="E-Medya Web Logo">
        </a>
        <EmMenu v-model:active="menuActive" />
        <EmNavBar :class="{ menuActive }" />
      </div>
    </header>
    <slot />
    <footer :class="{ menuActive }">
      <EmFooter v-bind="conditions" />
    </footer>
  </div>
</template>

<style scoped>
.layout {
  padding: var(--em-spacing-l);
  background-color: #FFFFFF;
  gap: var(--em-spacing-l);
  display: flex;
  flex-direction: column;
}

header {
  z-index: 1000;
  margin-top: 80px;
  flex: 10;
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
  background-color: #FFFFFF;
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
  margin: 0 !important ;
  justify-content: flex-end;
  margin-top: 0;
}
}
</style>
