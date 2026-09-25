import type { NavigationMenuItem } from '@nuxt/ui'

export function useMenu(name: string) {
  const { data } = useAsyncData(`menu-${name}`, () => $fetch<CmsMenu>(`/api/menu/${name}`))

  // `exact`: every CMS page shares the catch-all route, so match on the full path.
  return computed<NavigationMenuItem[]>(() =>
    (data.value?.items ?? []).map(item => ({ ...item, exact: true })),
  )
}
