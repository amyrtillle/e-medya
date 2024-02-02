<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['update:active'])

// Function to toggle the active state and emit the event
function toggleActive() {
  emits('update:active', !props.active)
}
</script>

<template>
  <div class="menu" :class="{ active }" @click="toggleActive">
    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line id="up" x1="3.5" y1="5" x2="25" y2="5" stroke="#543E7E" stroke-width="7" stroke-linecap="round" />
      <line x1="16.5" y1="15" x2="33.5" y2="15" stroke="#543E7E" stroke-width="7" stroke-linecap="round" />
      <line id="down" x1="25" y1="25" x2="45" y2="25" stroke="#543E7E" stroke-width="7" stroke-linecap="round" />
    </svg>
  </div>
</template>

<style scoped>
*{
  transition: all 0.3s ease-in-out;
}

.menu{
  width: fit-content;
}
.active svg #up{
  transform: translateX(21.5px)
}

.active #down{
  transform: translateX(-21.5px)
}
</style>
