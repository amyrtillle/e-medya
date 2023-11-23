import type { Meta, StoryObj } from '@storybook/vue3'

import EmIcon from './EmIcon.vue'

const meta = {
  component: EmIcon,
  argTypes: {
    src: {
      type: 'select',
      options: ['arrowUp', 'arrowDown', 'play', 'calendar', 'cast', 'write', 'verified', 'money', 'checkmark', 'question', 'folder', 'translate', 'voice', 'message', 'phone', 'time', 'security', 'search', 'send', 'account', 'pin', 'rain', 'sun', 'validated', 'home', 'instagram', 'linkedin', 'youtube'],
    },
  },
} satisfies Meta<typeof EmIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {
    src: 'play',
  },
} satisfies Story
