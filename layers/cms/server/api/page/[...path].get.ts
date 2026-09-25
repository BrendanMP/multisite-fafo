export default defineEventHandler(async (event) => {
  const path = getRouterParam(event, 'path') || 'index'

  const page = await getContent<CmsPage>(`pages/${path}`)
  if (!page) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  }

  return page
})
