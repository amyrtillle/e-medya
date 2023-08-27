import type { Meta, StoryObj } from '@storybook/vue3'

import TextContent from './TextContent.vue'

const meta = {
  component: TextContent,
  argTypes: {
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'p', 'span'],
    },
    typo: {
      control: 'select',
      options: ['typo-primary', 'typo-secondary'],
    },
  },
} satisfies Meta<typeof TextContent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {
    text: 'Hello World',
    tag: 'h1',
    typo: 'typo-primary',
  },
} satisfies Story
