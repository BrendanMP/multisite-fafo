<script setup lang="ts">
const route = useRoute()
const path = [route.params.slug].flat().join('/') || 'index'

const page = await usePage(path)

useHead({ title: page.value.title })
</script>

<template>
  <CmsSections
    v-if="page.sections?.length"
    :sections="page.sections"
  />
  <UPageHeader
    v-else
    :title="page.title"
    :description="page.description"
  />
</template>
