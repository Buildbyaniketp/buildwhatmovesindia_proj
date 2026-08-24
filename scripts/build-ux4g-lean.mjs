import { readFile, writeFile } from 'node:fs/promises'
import { PurgeCSS } from 'purgecss'

const sourcePath = new URL('../node_modules/ux4g-web-components/styles/ux4g.css', import.meta.url)
const source = await readFile(sourcePath, 'utf8')
const withoutEmbeddedFonts = source.replace(/@font-face\{.*?\}/gs, '')

const [result] = await new PurgeCSS().purge({
  css: [{ raw: withoutEmbeddedFonts }],
  content: ['index.html', 'src/**/*.{js,jsx}'],
  safelist: ['html', 'body'],
  fontFace: false,
  keyframes: true,
})

await writeFile('src/ux4g-lean.css', `${result.css}\n`)
