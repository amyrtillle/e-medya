import type { Meta, StoryObj } from '@storybook/vue3'

import EmServiceCard from './EmServiceCard.vue'

const meta = {
  component: EmServiceCard,
  argTypes: {
    icon: {
      type: 'select',
      options: ['play', 'calendar', 'cast', 'write', 'verified', 'money', 'checkmark', 'question', 'folder', 'translate', 'voice', 'message', 'phone', 'time', 'security', 'search', 'send', 'account', 'pin', 'rain', 'sun', 'validated', 'home', 'instagram', 'linkedin', 'youtube'],
    },
    text: {
      type: 'text',
    },
    title: {
      type: 'text',
    },
  },
} satisfies Meta<typeof EmServiceCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {
    title: 'lorem ipsum',
    text: 'lorem ipsum ',
    icon: 'play',
  },
} satisfies Story
