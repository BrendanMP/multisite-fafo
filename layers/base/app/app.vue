<script setup lang="ts">
const { site } = useAppConfig()

useHead({
  titleTemplate: title => (title ? `${title} · ${site.name}` : site.name),
})
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
