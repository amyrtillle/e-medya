import type { Meta, StoryObj } from '@storybook/vue3'

import EmSocialSection from './EmSocialSection.vue'

const meta = {
  component: EmSocialSection,
  argTypes: {},
} satisfies Meta<typeof EmSocialSection>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
args: {}
} satisfies Story