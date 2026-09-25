<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />
    <UMain>
      <UContainer class="py-8">
        <slot />
      </UContainer>
    </UMain>
    <SiteFooter />
  </div>
</template>
