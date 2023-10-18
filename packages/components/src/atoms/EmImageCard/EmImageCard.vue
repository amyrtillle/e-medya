<script setup lang="ts">
import type { ImageProps } from "../../types";

withDefaults(defineProps<ImageProps>(), {
  src: "https://via.placeholder.com/1920",
  alt: "image",
  variant: "primary"
});
</script>

<template>
  <img :src="src" :class="{ [`variant-${variant}`]: true }" :alt="alt" />
</template>

<style scoped>
img {
  border-radius: var(--em-radius-xs);
  object-fit: cover;
  width: 100%;
}

.variant-primary {
  aspect-ratio: 4/3;
}

.variant-secondary {
  aspect-ratio: 16/9;
}

.variant-tertiary {
  aspect-ratio: 9/16;
}
</style>
