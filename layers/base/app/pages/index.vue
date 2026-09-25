<script setup lang="ts">
const { site } = useAppConfig()
</script>

<template>
  <UPageHero
    :title="site.name"
    :description="site.tagline"
  >
    <template #links>
      <UButton
        to="/about"
        label="About"
        trailing-icon="i-lucide-arrow-right"
      />
    </template>
  </UPageHero>
</template>
