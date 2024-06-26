import shared from '@e-medya-web/shared/vite'
import { publicEnv } from './config/env'

export default defineNuxtConfig({
  devServer: {
    host: 'localhost',
    port: 3005,
  },
  site: {
    url: 'https://e-medya.fr',
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
  modules: ['@vueuse/nuxt', '@nuxtjs/sitemap'],
  css: [
    '@e-medya-web/css-core',
    '@fontsource/inter/400.css',
    '@fontsource/inter/700.css',
    '@fontsource/outfit/400.css',
    '@fontsource/outfit/700.css',
  ],
  experimental: {
    externalVue: false,
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
})
