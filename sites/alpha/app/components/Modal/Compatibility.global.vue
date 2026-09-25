<script setup lang="ts">
// Opened from CMS actions as { "modal": "compatibility", "props": { ... } }.
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Check your phone',
  description: 'Let’s make sure it works on our network!',
})

const emit = defineEmits<{ close: [] }>()

const imei = ref('')
</script>

<template>
  <UModal
    :title="title"
    :description="description"
  >
    <template #body>
      <UFormField
        label="IMEI"
        name="imei"
        help="Dial *#06# on your phone to find it."
      >
        <UInput
          v-model="imei"
          placeholder="15-digit IMEI"
          inputmode="numeric"
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
