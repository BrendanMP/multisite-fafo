<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Check your coverage',
})

const emit = defineEmits<{ close: [] }>()

const zip = ref('')
</script>

<template>
  <UModal
    :title="title"
    :description="description"
  >
    <template #body>
      <UFormField
        label="ZIP code"
        name="zip"
      >
        <UInput
          v-model="zip"
          placeholder="e.g. 90210"
          class="w-full"
        />
      </UFormField>
    </template>

    <template #footer>
      <UButton
        label="Close"
        color="neutral"
        variant="outline"
        @click="emit('close')"
      />
    </template>
  </UModal>
</template>
