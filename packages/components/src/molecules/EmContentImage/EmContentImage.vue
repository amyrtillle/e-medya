<script setup lang="ts">
import { EmTextContent, EmImageCard } from '../../components'
import type { TextContentProps, ImageProps } from '../../components'

withDefaults(defineProps<TextContentProps & ImageProps>(), {
  src: 'https://via.placeholder.com/1920',
  alt: 'image',
  variant: 'primary',
  imageVariant: 'primary',
  text: [    
    'Title',
    'Content'
  ],
})
</script>

<template >
  <div class="em-content-image" :class="{ [`variant-${variant}`]: true }" >
      <EmImageCard :src="src" :alt="alt" :imageVariant="imageVariant" />
      <div class="content">
        <EmTextContent tag="h3" typo="primary" variant="primary" size="l" :text="text[0]" />
        <EmTextContent tag="p" typo="secondary" variant="primary" size="s" :text="text[1]"/>
      </div>
    </div>
</template>

<style scoped>
  .em-content-image{
    width: fit-content;
  }

  .content{
    width: fit-content;
  }

  .em-content-image.variant-primary, .content{
    display: flex;
    flex-direction: column;
    gap: var(--em-spacing-s);
  }

  .em-content-image.variant-secondary{
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: var(--em-spacing-xxs);
  }
  .em-content-image.variant-secondary .content{
    display: flex;
    gap: var(--em-spacing-xxs);
  }

  .em-content-image.variant-secondary .em-image-card{
    width: 30%;
  }

  .em-content-image.variant-tertiary{
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .em-content-image.variant-tertiary .em-image-card{
    width: 30%;
  }

  .em-content-image.variant-tertiary .content{
    display: flex;
    flex-direction: column;
    gap: var(--em-spacing-xxs);
    width: 100%;
  }
</style>
