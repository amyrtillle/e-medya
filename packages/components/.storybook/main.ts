import type { StorybookConfig } from '@storybook/vue3-vite'

const config = {
  stories: ['../src'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/vue3-vite',
  docs: {
    autodocs: 'tag'
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    check: true
  },
  staticDirs: ['../static']
} satisfies StorybookConfig;

export default config;
