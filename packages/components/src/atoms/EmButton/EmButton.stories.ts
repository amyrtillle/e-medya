import type { Meta, StoryObj } from '@storybook/vue3'

import EmButton from './EmButton.vue'

const meta = {
  component: EmButton,
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      type: 'select',
      options: ['primary', 'secondary'],

    },
  },
} satisfies Meta<typeof EmButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {
    label: 'Contact',
    variant: 'primary',
  },
} satisfies Story
