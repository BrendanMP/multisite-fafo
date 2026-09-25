// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

const roots = ['layers/*', 'sites/*']

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
  dirs: {
    root: roots,
    src: roots.map(root => `${root}/app`),
  },
})
