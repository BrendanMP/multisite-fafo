// Shared base layer — every site extends this.
// https://nuxt.com/docs/guide/going-further/layers
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  devtools: { enabled: true },
  // Resolve relative to this layer, not the consuming site.
  css: [fileURLToPath(new URL('./app/assets/main.css', import.meta.url))],
  compatibilityDate: '2025-07-15',
})
