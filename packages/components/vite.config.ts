import { defineConfig } from 'vite'
import shared from '@e-medya-web/shared/vite'
import vue from '@vitejs/plugin-vue'
import autoimports from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    autoimports({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
    }),
    shared(),
  ],
  optimizeDeps: {
    include: ['vue'],
  },
})
