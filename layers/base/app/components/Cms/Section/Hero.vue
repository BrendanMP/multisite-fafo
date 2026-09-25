<script setup lang="ts">
defineProps<{ content: CmsHeroSection['content'] }>()
</script>

<template>
  <UPageHero
    :title="content.title"
    :description="content.subtitle"
  >
    <template
      v-if="content.actions?.length"
      #links
    >
      <CmsAction
        v-for="action in content.actions"
        :key="action.label"
        :action="action"
      />
    </template>
  </UPageHero>
</template>
