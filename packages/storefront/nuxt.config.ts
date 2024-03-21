import shared from '@e-medya-web/shared/vite'
import unocss from '@e-medya-web/unocss-preset'
import { publicEnv } from './config/env'

export default defineNuxtConfig({
  devServer: {
    host: 'localhost',
    port: 3005,
  },
  runtimeConfig: {
    public: {
      publicEnv,
      assets: {
        images: 'https://assets.e-medya.fr/apps/sharingpath/e-medya/images/',
        documents: 'https://assets.e-medya.fr/apps/sharingpath/e-medya/documents/',
        videos: 'https://assets.e-medya.fr/apps/sharingpath/e-medya/videos/',
      },
    },
  },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    '@e-medya-web/css-core',
    '@fontsource/inter/400.css',
    '@fontsource/inter/700.css',
    '@fontsource/outfit/400.css',
    '@fontsource/outfit/700.css',
  ],
  experimental: {
    inlineSSRStyles: false,
  },
  imports: {
    dirs: ['composables/**'],
  },
  devtools: {
    enabled: true,
  },
  vite: {
    plugins: [shared()],
  },
  telemetry: false,
  // modules
  unocss: {
    presets: [unocss()],
  },
})
