import { defineConfig } from 'vite'
import shared from '@e-medya-web/shared/vite'
import vue from '@vitejs/plugin-vue'
import autoimports from 'unplugin-auto-import/vite'
import unocss from 'unocss/vite'
import emPreset, { safelist } from '@e-medya-web/unocss-preset'

export default defineConfig({
  plugins: [
    vue(),
    autoimports({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
    }),
    shared(),
    unocss({
      safelist,
      presets: [emPreset()],
    }),
  ],
  optimizeDeps: {
    include: ['vue'],
  },
  test: {
    environment: 'jsdom',
  },
})
