<script setup lang="ts">
defineProps<{ content: CmsCardsSection['content'] }>()
</script>

<template>
  <UPageSection :title="content.title">
    <UPageGrid>
      <UPageCard
        v-for="(item, index) in content.items"
        :key="index"
        :title="item.content.title"
        :description="item.content.description"
      >
        <template
          v-if="item.content.action"
          #footer
        >
          <CmsAction :action="item.content.action" />
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
