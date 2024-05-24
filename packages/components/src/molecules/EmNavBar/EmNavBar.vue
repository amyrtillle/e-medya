<script setup lang="ts">
import { EmButton, EmTextContent } from '../../components'
</script>

<template>
  <nav class="em-nav">
    <EmTextContent tag="a" size="m" href="/services" text="Services" />
    <EmTextContent tag="a" size="m" href="/productions" text="Productions" />
    <EmTextContent tag="a" size="m" href="/about" text="A propos" />
    <EmButton link="/contact" label="Contact" />
    <EmButton link="/pricing" variant="secondary" label="Demander un devis" />
  </nav>
</template>

<style scoped>
nav{
  background-color: var(--em-color-purple-mountain-majesty);
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  padding: 50px 20px 50px 50px;
  gap: 30px;
  border-radius: 15px 0px 0px 15px;
}

nav .em-button:first-of-type{
  margin-top: 80px;
}

a{
  text-decoration: none;
  font-weight: var(--em-typography-font-weight-semibold);
}

@media screen and (min-width: 1024px) {
nav{
  background-color: transparent;
  gap: 40px;
  align-items: center;
  width: 100%;
  border-radius: 0;
  flex-direction: row;
  padding: 0;
}
nav .em-button:first-of-type{
  margin: 0;
}
}
</style>
