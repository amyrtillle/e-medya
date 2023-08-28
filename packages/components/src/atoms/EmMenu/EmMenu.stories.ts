import type { Meta, StoryObj } from '@storybook/vue3'

import EmMenu from './EmMenu.vue'

const meta = {
  component: EmMenu,
  argTypes: {
    active: {
      type: 'boolean',
  },
}
} satisfies Meta<typeof EmMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {},
} satisfies Story
