// Defaults; each site overrides these in its own app/app.config.ts (deep-merged).
export default defineAppConfig({
  site: {
    name: 'Base Site',
    tagline: 'Shared by every site',
  },
  ui: {
    colors: {
      primary: 'slate',
      neutral: 'slate',
    },
  },
})
