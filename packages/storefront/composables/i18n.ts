export function localizePath(path: `/${string}`) {
  const { locale } = useI18n()

  return `/${locale.value}${path}`
}
