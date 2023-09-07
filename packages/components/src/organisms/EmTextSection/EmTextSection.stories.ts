import type { Meta, StoryObj } from '@storybook/vue3'

import EmTextSection from './EmTextSection.vue'

const meta = {
  component: EmTextSection,
  argTypes: {
    text: {
      type: 'text',
    },
    headline: {
      type: 'text',
    },
    title: {
      type: 'text',
    },
  },
} satisfies Meta<typeof EmTextSection>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, aliquam nunc',
    title: 'section title',
    headline: 'section headline',
  },
} satisfies Story
