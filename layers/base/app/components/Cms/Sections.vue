<script setup lang="ts">
defineProps<{ sections: CmsPageSection[] }>()

// Section `type` → component. Unknown types are skipped so new content can't break old code.
const components: Record<CmsPageSection['type'], Component> = {
  hero: resolveComponent('CmsSectionHero') as Component,
  cards: resolveComponent('CmsSectionCards') as Component,
}
</script>

<template>
  <template
    v-for="(section, index) in sections"
    :key="index"
  >
    <component
      :is="components[section.type]"
      v-if="components[section.type]"
      :content="section.content"
    />
  </template>
</template>
