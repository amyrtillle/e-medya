import type { Meta, StoryObj } from '@storybook/vue3'

import EmTextContent from './EmTextContent.vue'

const meta = {
  component: EmTextContent,
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
} satisfies Meta<typeof EmTextContent>

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
