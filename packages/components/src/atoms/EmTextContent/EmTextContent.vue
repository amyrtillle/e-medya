<script setup lang="ts">
import type { TextContentProps } from '../../types'

withDefaults(defineProps<TextContentProps>(), {
  tag: 'p',
  typo: 'primary',
  variant: 'primary',
  size: 'xs',
})
</script>

<template>
  <component
    :is="tag" class="text-content"
    :class="{ [`typo-${typo}`]: true, [`variant-${variant}`]: true, [`${size}`]: true }"
  >
    {{ text }}
  </component>
</template>

<style scoped>
.typo-primary {
  font-family: var(--em-typography-font-family-primary)
}

.typo-secondary {
  font-family: var(--em-typography-font-family-secondary)
}

.variant-primary {
  color: var(--em-color-black)
}

.variant-secondary {
  color: var(--em-color-grey)
}

.variant-tertiary {
  color: var(--em-color-libery)
}

span.xs, p.xs {
  font-size: var(--em-typography-font-size-xs);
}

span.xs.variant-tertiary, p.xs.variant-tertiary {
  font-weight: var(--em-typography-font-weight-semibold);
}

span.s, p.s {
  font-size: var(--em-typography-font-size-s);
}

span.m, p.m {
  font-size: var(--em-typography-font-size-m);
}

span.l, p.l {
  font-size: var(--em-typography-font-size-l);
}

h3, s{
  font-weight: var(--em-typography-font-weight-medium);
}
</style>
