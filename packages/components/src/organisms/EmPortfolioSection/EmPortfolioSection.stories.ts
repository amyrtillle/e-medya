import type { Meta, StoryObj } from '@storybook/vue3'

import EmPortfolioSection from './EmPortfolioSection.vue'

const meta = {
  component: EmPortfolioSection,
  argTypes: {
    headline: {
      type: 'text'
    },
    title: {
      type: 'text'
    },
    images: {
      src: {
        type: "text"
      },
      alt: {
        type: "text"
      },
      text: {
        type: "array"
      },
    },
    button: {
      label: {
        type: "text"
      },
      link: {
        type: "text"
      }
    }
  },
} satisfies Meta<typeof EmPortfolioSection>

export default meta
type Story = StoryObj<typeof meta>

export const Primary = {
  args: {
    headline: 'prout',
    title: 'prout',
    images: [
      {
        src: 'https://via.placeholder.com/1920',
        alt: 'alt',
        text: [
          'Title',
          'content',
        ],
      },
      {
        src: 'https://via.placeholder.com/1920',
        alt: 'alt',
        text: [
          'Title',
          'content',
        ],
      },
      {
        src: 'https://via.placeholder.com/1920',
        alt: 'alt',
        text: [
          'Title',
          'content',
        ],
      }
    ],
    button: {
      link: "youtube.com",
      label: "conytact"
    }
  }
} satisfies Story