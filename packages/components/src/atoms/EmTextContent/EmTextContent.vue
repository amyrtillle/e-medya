<script setup lang="ts">
import type { TextContentProps } from '../../types'

withDefaults(defineProps<TextContentProps>(), {
  tag: 'p',
  typo: 'primary',
  variant: 'primary',
})
</script>

<template>
  <component
    :is="tag" class="text-content"
    :class="{ [`typo-${typo}`]: true, [`variant-${variant}`]: true, [`${size}`]: true }" v-bind="{ href }"
  >
    {{ text }}
  </component>
</template>

<style scoped>
.text-content {
  margin: 0;
  padding: 0;
}

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

a:hover {
  color: var(--em-color-libery)
}

a.xs,
span.xs,
p.xs,
label.xs {
  font-size: var(--em-typography-font-size-xs);
}

.bold {
  font-weight: var(--em-typography-font-weight-semibold);
}

a.s,
span.s,
p.s,
label.s {
  font-size: var(--em-typography-font-size-s);
}

a.m,
span.m,
p.m, 
label.m {
  font-size: var(--em-typography-font-size-m);
}

a.l,
span.l,
p.l, 
label.l
h3.l {
  font-size: var(--em-typography-font-size-l);
}

h3.m {
  font-weight: var(--em-typography-font-weight-medium);
}
</style>
