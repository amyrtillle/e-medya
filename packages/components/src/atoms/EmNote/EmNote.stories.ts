import type { Meta, StoryObj } from '@storybook/vue3'

import EmNote from './EmNote.vue'

const meta = {
  component: EmNote,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof EmNote>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
args: {

    text: 'Some note.',

}
} satisfies Story