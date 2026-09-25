<script setup lang="ts">
const route = useRoute()
const path = [route.params.slug].flat().join('/') || 'index'

const page = await usePage(path)

useHead({ title: page.value.title })
</script>

<template>
  <UPageHeader
    :title="page.title"
    :description="page.description"
  />
</template>
