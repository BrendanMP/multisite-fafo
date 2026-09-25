<script setup lang="ts">
const { site } = useAppConfig()
const items = useMenu('header')
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
