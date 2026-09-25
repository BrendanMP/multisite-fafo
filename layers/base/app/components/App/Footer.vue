<script setup lang="ts">
const { site } = useAppConfig()
const items = useMenu('footer')
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        © {{ new Date().getFullYear() }} {{ site.name }}
      </p>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />
  </UFooter>
</template>
