import type { Meta, StoryObj } from '@storybook/vue3'

import EmInputs from './EmInputs.vue'

const meta = {
  component: EmInputs,
  argTypes: {
    src: {
      control: 'select',
      options: ['play', 'calendar', 'cast', 'write', 'verified', 'money', 'checkmark', 'question', 'folder', 'translate', 'voice', 'message', 'phone', 'time', 'security', 'search', 'send', 'account', 'pin', 'rain', 'sun', 'validated', 'home', 'instagram', 'linkedin', 'youtube'],
    },
    type: {
      control: 'select',
        options: ['radio', 'checkbox', 'select', 'text', 'textarea', 'email', 'phone', 'file', 'date', 'time'],
    },
    label: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    icon: {
      control: {
        type: 'select',
        options: ['play', 'calendar', 'cast', 'write', 'verified', 'money', 'checkmark', 'question', 'folder', 'translate', 'voice', 'message', 'phone', 'time', 'security', 'search', 'send', 'account', 'pin', 'rain', 'sun', 'validated', 'home', 'instagram', 'linkedin', 'youtube'],
      },
    },
    id: {
      control: {
        type: 'text',
      },
    },
    ariaLabel: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof EmInputs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
args: {
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  required: false,
  icon: 'play',
  id: 'id',
}
} satisfies Story