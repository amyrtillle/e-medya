import type { Meta, StoryObj } from '@storybook/vue3'

import EmSectionTitle from './EmSectionTitle.vue'

const meta = {
  component: EmSectionTitle,
  argTypes: {
    headline: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
  },
} satisfies Meta<typeof EmSectionTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {
    headline: 'Titre de section',
    title: 'Titre',
  },
} satisfies Story
