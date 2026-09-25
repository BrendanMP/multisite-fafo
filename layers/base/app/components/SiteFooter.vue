<script setup lang="ts">
const { site } = useAppConfig()
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        © {{ new Date().getFullYear() }} {{ site.name }}
      </p>
    </template>
  </UFooter>
</template>
