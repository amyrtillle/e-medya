import type { Preview } from '@storybook/vue3'
import '@e-medya-web/css-core'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/outfit/400.css'
import '@fontsource/outfit/700.css'

import 'virtual:uno.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
