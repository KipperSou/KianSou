const normalizeBase = (value: string) => {
  if (!value || value === '/') return ''
  return value.endsWith('/') ? value.slice(0, -1) : value
}

export const withBase = (path: string) => {
  if (!path) return path
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const base = normalizeBase(import.meta.env.BASE_URL)

  return `${base}${normalizedPath}` || '/'
}
