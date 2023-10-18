import type { Meta, StoryObj } from '@storybook/vue3'

import EmImageCard from './EmImageCard.vue'

const meta = {
  component: EmImageCard,
  argTypes: {
    src: {
      control: 'text',
    },
    variant: {
      type: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} satisfies Meta<typeof EmImageCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {
    label: 'Contact',
    variant: 'primary',
  },
} satisfies Story