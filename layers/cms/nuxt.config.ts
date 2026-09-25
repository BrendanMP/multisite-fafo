// CMS layer — builds on the base layer and serves the JSON pages that base's
// catch-all route renders, from content/<app.config id>/pages.
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  extends: ['../base'],
  nitro: {
    // Bundle the content into the server build so it works without a filesystem.
    serverAssets: [
      { baseName: 'content', dir: fileURLToPath(new URL('./content', import.meta.url)) },
    ],
  },
})
