import type { Meta, StoryObj } from '@storybook/vue3'

import EmHeadLine from './EmHeadLine.vue'

const meta = {
  component: EmHeadLine,
  argTypes: {},
} satisfies Meta<typeof EmHeadLine>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
args: {}
} satisfies Story