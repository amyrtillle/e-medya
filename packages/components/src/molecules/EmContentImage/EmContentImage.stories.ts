import type { Meta, StoryObj } from '@storybook/vue3'

import EmContentImage from './EmContentImage.vue'
import { title } from 'process'

const meta = {
  component: EmContentImage,
  argTypes: {
    src: {
      control: 'text',
    },
    text: {
      type: 'text',
      control: 'array',
    },
    
    variant: {
      type: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },

    imageVariant: {

      type: 'select',
      options: ['primary', 'secondary', 'tertiary'],

    }
  },
} satisfies Meta<typeof EmContentImage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
args: {
  src: 'https://picsum.photos/200/300',
  variant: 'primary',
  imageVariant: 'primary',
  text: [
    'Un titre',
    'Un sous titre',
  ]
}
} satisfies Story