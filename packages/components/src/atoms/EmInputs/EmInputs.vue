<script setup lang="ts">
import type { InputProps, IconProps } from '../../types'
import { EmTextContent, EmIcon } from '../../components';

withDefaults(defineProps<InputProps & IconProps>(), {
  type: 'text',
  placeholder: 'placeholder',
  value: 'value',
  name: 'name',
  id: 'id',
  class: 'class',
  required: false,
  options: [
    {
      value: 'value',
      text: 'select'
    },
  ],
  ariaLabel: undefined,
  src : undefined,
}, 
)

</script>

<template>
  <div v-if="type != 'select' && type !='checkbox'" class="em-input">
    <div class="content">
      <!-- icon -->
      <EmIcon v-if="src" :src="src" />

      <div class="label">
        <EmTextContent v-if="label" tag="label" class="typo-primary variant-tertiary s bold" :for="name" :text="label" />
        <EmTextContent v-if="required" tag="span" class="typo-primary variant-secondary s" text="*" :id="name"/>
      </div>
    </div>

    <!-- input -->
    <input class="input" :aria-label="ariaLabel" :class="type" :type="type" :placeholder="placeholder" :name="label"  :required="required" :id="name" />
  </div>
  <div v-else-if="type == 'checkbox'" class="em-checkbox checkbox-wrapper-30">

    <span class="checkbox">
      <input class="input" :class="type" :type="type" :placeholder="placeholder" :name="label"  :required="required" :id="name" />
      <svg>
        <use xlink:href="#checkbox-30" class="checkbox"></use>
      </svg>
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
      <symbol id="checkbox-30" viewBox="0 0 22 22">
        <path fill="none" stroke="#5E539F" d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"/>
      </symbol>
    </svg>
    <EmTextContent tag="label" class="typo-primary variant-secondary s" :for="name" :text="label" />
  </div>
</template>

<style scoped>
.em-input{
  display: flex;
  flex-direction: column;
  gap: var(--em-spacing-xxs);
}

.em-checkbox{
  display: flex;
  flex-direction: row;
  gap: var(--em-spacing-xxs);
  align-items: center;
  padding: var(--em-spacing-l) var(--em-spacing-s) ;
  border: 2px solid var(--em-color-purple-mountain-majesty);
  border-radius: var(--em-radius-xs);
}


.content{
  display: flex;
  flex-direction: row;
  padding-left: var(--em-spacing-xl);
  gap: var(--em-spacing-s);
  align-items: end;
}

.label{
  display: flex;
  gap: var(--em-spacing-xxs);
}
.input{
  border: 2px solid var(--em-color-purple-mountain-majesty);
  width: 100%;
  border-radius: var(--em-radius-xs);
  padding: var(--em-spacing-xxs);
  background-color: transparent;
}
.checkbox{
  width: fit-content;
  appearance: none;
      --brdr: var(--em-color-purple-mountain-majesty);;
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
.checkbox > * {
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
.checkbox input:checked + svg {
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
</style>
