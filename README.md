# Multisite with Nuxt Layers

Multiple Nuxt sites sharing one base layer. Each site is a standalone Nuxt app that
extends `layers/base` and overrides only what it needs.

## Structure

```
layers/base/   shared layer: Nuxt UI, layout, components, pages, app.config defaults
sites/alpha/   Alpha site (port 3000)
sites/beta/    Beta site (port 3001)
```

## Commands

```bash
npm install            # also runs `nuxt prepare` for every site

npm run dev:alpha      # http://localhost:3000
npm run dev:beta       # http://localhost:3001
npm run dev:all        # all sites at once

npm run build:<site>   # output in sites/<site>/.output
npm run generate:<site>
npm run preview:<site>

npm run lint           # ESLint with stylistic rules
npm run lint:fix
```

## Customising a site

- **Config and branding:** set `site.name`, `site.tagline` and `ui.colors.primary` in
  `sites/<site>/app/app.config.ts`. It is deep-merged over the base defaults.
- **Components, pages, layouts:** add a file with the same path as one in
  `layers/base/app/` to override it, or a new file to add it for that site only.
- **Nuxt config:** `sites/<site>/nuxt.config.ts` is merged over `layers/base/nuxt.config.ts`.

## Adding a site

1. Copy `sites/alpha` to `sites/<name>` and edit its `app/app.config.ts`.
2. Give it a unique `devServer.port` in its `nuxt.config.ts`.
3. In `package.json`, add `dev:`, `build:`, `generate:` and `preview:` scripts, add it to
   `dev:all`, and add `nuxt prepare sites/<name>` to `postinstall`.
