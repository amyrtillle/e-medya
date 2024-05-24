<script setup lang="ts">
import type { IconProps, InputProps } from '../../types'
import { EmButton, EmIcon, EmTextContent } from '../../components'

withDefaults(defineProps<InputProps & IconProps>(), {
  type: 'text',
  placeholder: 'placeholder',
  value: 'value',
  name: 'name',
  id: 'id',
  class: 'class',
  required: false,
  accept: 'application/pdf,.zip',
  options: [
    {
      value: 'value',
      text: 'select',
    },
    {
      value: 'value',
      text: 'select',
    },
    {
      value: 'value',
      text: 'select',
    },
  ],
  ariaLabel: undefined,
  src: undefined,
},
)

let selectIcon = 'arrowDown'

const dropDown = ref(null)
const isDropDownVisible = ref(false)
const selectedOption = ref(null)
let isOpen = ''
function toggleOptionSelect(option) {
  selectedOption.value = option.text
  isDropDownVisible.value = false
  selectIcon = 'arrowDown'
  isOpen = ''
}

const mappedSelectedOption = computed(() => {
  return (selectedOption.value?.text || selectedOption.value) || 'select an option'
})

function toggleDropDown() {
  isDropDownVisible.value = !isDropDownVisible.value
  selectIcon = isDropDownVisible.value ? 'arrowUp' : 'arrowDown'
  if (isDropDownVisible.value) {
    isOpen = 'open'
  }
  else {
    isOpen = ''
  }
}

function closeDropDown(element) {
  if (!dropDown.value.contains(element.target)) {
    isDropDownVisible.value = false
    selectIcon = 'arrowDown'
    isOpen = ''
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropDown)
})

onBeforeUnmount(() => {
  window.addEventListener('click', closeDropDown)
})
</script>

<template>
  <div v-if="type == 'submit'" class="content">
    <input type="submit" :name="name" :value="label" class="input">
  </div>
  <div v-else-if="type == 'textarea'" class="em-input">
    <div class="content">
      <!-- icon -->
      <EmIcon v-if="src" :src="src" />

      <div class="label">
        <EmTextContent
          v-if="label" tag="label" class="typo-primary variant-tertiary s bold" :for="name"
          :text="label"
        />
        <EmTextContent v-if="required" :id="name" tag="span" class="typo-primary variant-secondary s" text="*" />
      </div>
    </div>

    <!-- input -->
    <textarea
      :id="name" class="input" :aria-label="ariaLabel" :class="type" :placeholder="placeholder" :name="name"
      :required="required"
    />
  </div>
  <div v-else-if="type != 'select' && type != 'checkbox'" class="em-input">
    <div class="content">
      <!-- icon -->
      <EmIcon v-if="src" :src="src" />

      <div class="label">
        <EmTextContent
          v-if="label" tag="label" class="typo-primary variant-tertiary s bold" :for="name"
          :text="label"
        />
        <EmTextContent v-if="required" :id="name" tag="span" class="typo-primary variant-secondary s" text="*" />
      </div>
    </div>

    <!-- input -->
    <input
      :id="name" class="input" :aria-label="ariaLabel" :class="type" :type="type" :placeholder="placeholder"
      :name="name" :required="required"
      :accept="accept"
    >
  </div>

  <div v-else-if="type == 'checkbox'" class="em-checkbox">
    <span class="checkbox">
      <input
        :id="name" class="input" :class="type" :type="type" :placeholder="placeholder" :name="name"
        :required="required"
      >
      <svg>
        <use xlink:href="#checkbox-svg" class="checkbox" />
      </svg>
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
      <symbol id="checkbox-svg" viewBox="0 0 22 22">
        <path
          fill="none" stroke="#5E539F"
          d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
        />
      </symbol>
    </svg>
    <EmTextContent tag="label" class="typo-primary variant-secondary s" :for="name" :text="label" />
  </div>

  <div v-else class="em-select">
    <div class="content">
      <EmIcon v-if="src" :src="src" />

      <div class="label">
        <EmTextContent
          v-if="label" tag="label" class="typo-primary variant-tertiary s bold" :for="name"
          :text="label"
        />
        <EmTextContent v-if="required" :id="name" tag="span" class="typo-primary variant-secondary s" text="*" />
      </div>
    </div>
    <div ref="dropDown" class="dropdown-wrapper">
      <div ref="dropdDownWrap" class="dropdown-selected-option" :class="isOpen" @click="toggleDropDown()">
        <EmTextContent
          tag="span" class="typo-primary variant-tertiary s" :text="mappedSelectedOption"
          :value="mappedSelectedOption"
        />
        <EmIcon :src="selectIcon" />
      </div>
      <div v-if="isDropDownVisible" class="options-wrapper">
        <div v-for="option in options" :key="option.value" class="option" @click="toggleOptionSelect(option)">
          <EmButton :value="option.value" :label="option.text" href="" variant="inputs" />
        </div>
      </div>
    </div>
    <input type="hidden" :name="name" :value="mappedSelectedOption">
  </div>
</template>

<style scoped>
.em-input,
.em-select {
  display: flex;
  flex-direction: column;
  gap: var(--em-spacing-xs);
  justify-content: center;
}

.em-checkbox {
  display: flex;
  flex-direction: row;
  gap: var(--em-spacing-xxs);
  align-items: center;
  padding: var(--em-spacing-l) var(--em-spacing-s);
  border: 2px solid var(--em-color-purple-mountain-majesty);
  border-radius: var(--em-radius-xs);
}

.content {
  display: flex;
  flex-direction: row;
  padding-left: var(--em-spacing-xl);
  gap: var(--em-spacing-s);
  align-items: flex-end;
}

.label {
  display: flex;
  gap: var(--em-spacing-xxs);
}

.input {
  border: 2px solid var(--em-color-purple-mountain-majesty);
  width: 100%;
  border-radius: var(--em-radius-xs);
  padding: var(--em-spacing-xxs);
  background-color: transparent;
}

.checkbox {
  width: fit-content;
  appearance: none;
  --brdr: var(--em-color-purple-mountain-majesty);
  ;
  --brdr-actv: var(--em-color-libery);
  --brdr-hovr: var(--em-color-purple-mountain-majesty);
  --dur: calc((var(--size, 2)/2) * 0.6s);
  display: inline-block;
  width: calc(var(--size, 1) * 22px);
  position: relative;
}

.checkbox:after {
  content: "";
  width: 100%;
  padding-top: 100%;
  display: block;
}

.checkbox>* {
  position: absolute;
}

.checkbox input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border-radius: var(--em-radius-xxs);
  border: calc(var(var(--brdr-actv), var(--size, 2)) * 1px) solid;
  width: 23px;
  height: 23px;
  color: var(--newBrdrClr, var(--brdr));
  outline: none;
  margin: 0;
  padding: 0;
  transition: all calc(var(--dur) / 3) linear;
}

.checkbox input:hover,
.checkbox input:checked {
  --brdr-actv: calc(var(--size, 1) * 2);
}

.checkbox input:hover {
  --newBrdrClr: var(--brdr-hovr);
}

.checkbox input:checked {
  --newBrdrClr: var(--brdr-actv);
  transition-delay: calc(var(--dur) /1.3);
}

.checkbox input:checked+svg {
  --dashArray: 16 93;
  --dashOffset: 109;
}

.checkbox svg {
  fill: none;
  left: 0;
  pointer-events: none;
  stroke: var(--stroke, var(--border-active));
  stroke-dasharray: var(--dashArray, 93);
  stroke-dashoffset: var(--dashOffset, 94);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  top: 0;
  transition: stroke-dasharray var(--dur), stroke-dashoffset var(--dur);
}

.checkbox svg,
.checkbox input {
  display: block;
  height: 100%;
  width: 100%;
}

.dropdown-wrapper {
  cursor: pointer;
  width: 100%;
}

.dropdown-selected-option {
  border: solid 2px var(--em-color-purple-mountain-majesty);
  display: flex;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 5px;
  justify-content: space-between;
}

.dropdown-selected-option.open {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: none;
}

.options-wrapper {
  display: flex;
  flex-direction: column;
  border: solid 2px var(--em-color-purple-mountain-majesty);
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  gap: var(--em-spacing-xs);
}

.option:last-of-type {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.option {
  margin: auto;
  width: fit-content;

}

textarea {
  resize: vertical;
  min-height: 100px;
  height: 100%;
}

textarea::placeholder,
input::placeholder {
  font-family: var(--em-typography-font-family-secondary);
}

.input[type='submit'] {
  width: fit-content;
  padding: var(--em-spacing-xs) var(--em-spacing-m);
  margin: auto;
}
</style>
