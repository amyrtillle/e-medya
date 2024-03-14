<script setup lang="ts">
import type { ButtonProps } from '../../types'

withDefaults(defineProps<ButtonProps>(), {
  link: '#',
  variant: 'primary',
})
</script>

<template>
  <div class="em-button">
    <a :class="{ [`variant-${variant}`]: true }" :type="type" :href="link">{{ label }}</a>
  </div>
</template>

<style scoped>
a{
  align-items: center;
  border-radius: var(--em-radius-xs);
  display: flex;
  font-family: var(--em-typography-font-family-primary);
  font-size: var(--em-typography-font-size-m);
  gap: 10px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  height: 100%;
  justify-content: center;
  padding: var(--em-spacing-m) var(--em-spacing-xl);
  width: fit-content;
  font-weight: var(--em-typography-font-weight-semibold);
  line-height: var(--em-spacing-m);
}

.variant-primary {
  color: var(--em-color-super-pink);
  background-color: var(--em-color-white);
}

.variant-primary:hover{
  background-color: var(--em-color-black);
  color: var(--em-color-libery);
}

.variant-secondary{
  background-color: var(--em-color-super-pink);
  color: var(--em-color-white);
}

.variant-secondary:hover{
  background-color: var(--em-color-dark-purple);
}
</style>
