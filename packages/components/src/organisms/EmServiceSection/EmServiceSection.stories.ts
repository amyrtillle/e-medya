import type { Meta, StoryObj } from '@storybook/vue3'

import EmServiceSection from './EmServiceSection.vue'

const meta = {
  component: EmServiceSection,
  argTypes: {
    headline: {
      type: 'text'
    },
    title: {
      type: 'text'
    },
      cards: {
        title: {
          type: "text"
        },
        text: {
          type: 'text'
        },
        icon: {
          type: 'text'
        }
      }
  },
} satisfies Meta<typeof EmServiceSection>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
args: {
headline: 'prout',
title: 'prout',
cards: [
  {
    title: 'coucou',
    text: 'coucou',
    icon: 'play'
  },
  {
    title: 'prout',
    text: 'prout',
    icon: 'play'
  }, 
  {
    title: 'coucou',
    text: 'Here a long text that be used as test to verify that not all cards have same height',
    icon: 'play'
  },
]
}
} satisfies Story