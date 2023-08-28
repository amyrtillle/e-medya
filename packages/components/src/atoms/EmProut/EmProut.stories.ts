import type { Meta, StoryObj } from '@storybook/vue3'

import EmProut from './EmProut.vue'

const meta = {
  component: EmProut,
  argTypes: {},
} satisfies Meta<typeof EmProut>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
args: {}
} satisfies Story