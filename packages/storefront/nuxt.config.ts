import shared from '@e-medya-web/shared/vite'
import unocss from '@e-medya-web/unocss-preset'
import { publicEnv } from './config/env'

export default defineNuxtConfig({
  devServer: {
    host: 'localhost',
    port: 3005,
  },
  runtimeConfig: {
    public: publicEnv,
  },
  modules: [
    '@nuxtjs/i18n',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-vitest',
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
  i18n: {
    defaultLocale: 'fr-fr',
    langDir: 'locales',
    lazy: true,
    locales: [
      { code: 'fr-fr', file: 'fr-fr.json', name: 'Français' },
    ],
    rootRedirect: {
      path: 'fr-fr',
      statusCode: 301,
    },
    strategy: 'prefix',
    vueI18n: 'config/i18n.ts',
  },
  unocss: {
    presets: [unocss()],
  },
  vitest: {
    startOnBoot: true,
  },
})
