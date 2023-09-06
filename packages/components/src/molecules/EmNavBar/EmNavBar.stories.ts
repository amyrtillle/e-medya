import type { Meta, StoryObj } from '@storybook/vue3'

import EmNavBar from './EmNavBar.vue'

const meta = {
  component: EmNavBar,
  argTypes: {},
} satisfies Meta<typeof EmNavBar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {},
} satisfies Story
