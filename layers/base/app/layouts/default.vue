<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <UMain>
      <UContainer class="py-8">
        <slot />
      </UContainer>
    </UMain>
    <AppFooter />
  </div>
</template>
