import type { Meta, StoryObj } from '@storybook/vue3'

import EmFooter from './EmFooter.vue'

const meta = {
  component: EmFooter,
  argTypes: {},
} satisfies Meta<typeof EmFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {},
} satisfies Story
