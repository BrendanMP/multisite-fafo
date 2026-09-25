import type { Component } from 'vue'

// Opens a CMS modal by name: 'savings-calculator' → <ModalSavingsCalculator>, i.e.
// components/Modal/SavingsCalculator.global.vue in any layer or site. `.global`
// makes it resolvable by name at runtime and loads it lazily on first open.
export function useCmsModal() {
  const { vueApp } = useNuxtApp()
  const overlay = useOverlay()

  function open(name: string, props?: Record<string, unknown>) {
    const componentName = `Modal${name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')}`
    const component: Component | undefined = vueApp.component(componentName)

    if (!component) {
      console.warn(`[cms] Unknown modal "${name}" (expected components/Modal/*.global.vue as <${componentName}>)`)
      return
    }

    return overlay.create(component, { destroyOnClose: true }).open(props)
  }

  return { open }
}
