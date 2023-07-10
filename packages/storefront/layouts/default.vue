<template>
  <LayoutHeader />
  <div class="layout__content">
    <slot />
  </div>
  <LayoutFooter />
</template>

<style scoped>
.layout__content {
  margin-top: var(--em-spacing-4xl);
}
</style>
