import { dirname, parse, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdirSync } from 'node:fs'
import { presetAttributify, presetIcons } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __assets = resolve(__dirname, '../assets')

/**
 * Extraction safelist for dynamic icons (avoids eager treeshaking)
 */
export const safelist = readdirSync(__assets).map(a => `i-em:${parse(a).name}`)

/**
 * UnoCSS preset for e-medya design system
 * @type {unocss.Preset}
 */
export default function preset() {
  return {
    name: 'unocss-preset-em',
    // safelist,
    presets: [
      presetAttributify(),
      presetIcons({
        collections: {
          em: FileSystemIconLoader(__assets),
        },
      }),
    ],
  }
}
