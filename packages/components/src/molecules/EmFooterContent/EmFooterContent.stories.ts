import type { Meta, StoryObj } from '@storybook/vue3'

import EmFooterContent from './EmFooterContent.vue'

const meta = {
  component: EmFooterContent,
  argTypes: {},
} satisfies Meta<typeof EmFooterContent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
args: {}
} satisfies Story