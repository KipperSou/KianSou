const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '')

const readEnv = (name: string) => {
  const value = process.env[name]?.trim()
  return value ? value : undefined
}

export const resolveSiteRuntimeConfig = () => {
  const repository = readEnv('GITHUB_REPOSITORY')
  const owner = readEnv('GITHUB_REPOSITORY_OWNER')
  const repoName = repository?.split('/')[1]

  const configuredSiteUrl = readEnv('PUBLIC_SITE_URL')
  const configuredBasePath = readEnv('PUBLIC_BASE_PATH')

  const defaultSiteUrl = owner ? `https://${owner}.github.io` : 'https://example.github.io'
  const isUserSite =
    Boolean(owner) &&
    Boolean(repoName) &&
    repoName!.toLowerCase() === `${owner!.toLowerCase()}.github.io`

  const inferredBasePath =
    repoName && !isUserSite && !configuredSiteUrl ? `/${repoName}` : ''

  return {
    siteUrl: trimTrailingSlash(configuredSiteUrl ?? defaultSiteUrl),
    basePath: configuredBasePath ?? inferredBasePath,
  }
}
