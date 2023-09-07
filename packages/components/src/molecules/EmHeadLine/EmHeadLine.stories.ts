import type { Meta, StoryObj } from '@storybook/vue3'

import EmHeadLine from './EmHeadLine.vue'

const meta = {
  component: EmHeadLine,
  argTypes: {
    text: {
      control: 'text',
    },
    variant: {
      type: 'select',
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof EmHeadLine>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {
    text: 'Titre',
    variant: 'primary',
  },
} satisfies Story
