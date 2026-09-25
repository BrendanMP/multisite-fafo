<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { site } = useAppConfig()

const items: NavigationMenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
]
</script>

<template>
  <UHeader :title="site.name">
    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </template>
  </UHeader>
</template>
