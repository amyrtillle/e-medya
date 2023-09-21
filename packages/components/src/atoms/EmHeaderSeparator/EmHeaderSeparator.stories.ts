import type { Meta, StoryObj } from '@storybook/vue3'

import EmHeaderSeparator from './EmHeaderSeparator.vue'

const meta = {
  component: EmHeaderSeparator,
  argTypes: {},
} satisfies Meta<typeof EmHeaderSeparator>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
args: {}
} satisfies Story