<script setup lang="ts">
import { EmButton, EmTextContent } from '../../components'
import { variant } from '../../types'

withDefaults(defineProps<{ variant: variant }>(), {
  variant: 'primary',
})
</script>

<template>
  <nav class="nav" :class="{ [`variant-${variant}`]: true }">
    <EmTextContent tag="a" size="m" href="./services" text="Services" />
    <EmTextContent tag="a" size="m" href="./productions" text="Productions" />
    <EmTextContent tag="a" size="m" href="./about" text="A propos" />
    <EmButton href="./contact" label="Contact" />
    <EmButton href="./devis" variant="secondary" label="Demander un devis" />
  </nav>
</template>

<style scoped>
nav{
  display: flex;
  gap: 40px;
  align-items: center;
}

a{
  text-decoration: none;
  font-weight: var(--em-typography-font-weight-semibold);
}
</style>
