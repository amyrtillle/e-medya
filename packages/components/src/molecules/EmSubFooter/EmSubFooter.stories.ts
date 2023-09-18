import type { Meta, StoryObj } from '@storybook/vue3'

import EmSubFooter from './EmSubFooter.vue'

const meta = {
  component: EmSubFooter,
  argTypes: {},
} satisfies Meta<typeof EmSubFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
args: {}
} satisfies Story