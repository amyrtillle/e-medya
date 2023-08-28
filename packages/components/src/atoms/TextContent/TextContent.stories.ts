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
      options: ['primary', 'secondary'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm'],
    },
  },
} satisfies Meta<typeof TextContent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {
    text: 'Hello World',
    tag: 'h1',
    typo: 'primary',
    variant: 'primary',
    size: 'm',
  },
} satisfies Story
