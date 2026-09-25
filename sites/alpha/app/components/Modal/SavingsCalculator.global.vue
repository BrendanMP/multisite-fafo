<script setup lang="ts">
// Opened from CMS actions as { "modal": "savings-calculator", "props": { ... } }.
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'How much could you save?',
  description: 'Find out how much you can save by switching!',
})

const emit = defineEmits<{ close: [] }>()

const carrier = ref<string>()
</script>

<template>
  <UModal
    :title="title"
    :description="description"
  >
    <template #body>
      <UFormField
        label="Current carrier"
        name="carrier"
      >
        <USelect
          v-model="carrier"
          :items="['Verizon', 'T-Mobile', 'AT&T', 'Other']"
          placeholder="Select a carrier"
          class="w-full"
        />
      </UFormField>
    </template>
  </UModal>
</template>
