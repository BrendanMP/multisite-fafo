import type { Ref } from 'vue'

// A CMS page (content/<site>/pages/<path>.json). Throws a 404 when it doesn't exist.
export async function usePage(path: string) {
  const { data } = await useAsyncData(`page-${path}`, () => $fetch<CmsPage>(`/api/page/${path}`))

  if (!data.value) {
    // Fatal only on the client (needed to show the error page during navigation);
    // on the server a fatal error is also logged as a request error.
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: import.meta.client })
  }

  return data as Ref<CmsPage>
}
