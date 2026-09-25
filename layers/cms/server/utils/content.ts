// Reads content/<app.config id>/<key>.json from the bundled content assets.
export function getContent<T>(key: string) {
  const { id } = useAppConfig()
  return useStorage('assets:content').getItem<T>(`${id}/${key}.json`)
}
