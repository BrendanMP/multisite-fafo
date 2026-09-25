export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'name')

  const menu = await getContent<CmsMenu>(`menus/${name}`)
  if (!menu) {
    throw createError({ statusCode: 404, statusMessage: 'Menu not found' })
  }

  return menu
})
