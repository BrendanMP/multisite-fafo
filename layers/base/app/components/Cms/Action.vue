<script setup lang="ts">
defineProps<{ action: CmsAction }>()

const { open } = useCmsModal()
</script>

<template>
  <UButton
    v-if="'to' in action"
    :to="action.to"
    :label="action.label"
  />
  <UButton
    v-else
    :label="action.label"
    @click="open(action.modal, action.props)"
  />
</template>
