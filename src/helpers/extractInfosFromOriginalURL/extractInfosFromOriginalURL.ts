type RequestInfos = {
  clientSlug: string
  currentEndpoint: string
}

export function extractInfosFromOriginalURL(originalUrl: string): RequestInfos {
  const pattern = /^\/proxy\/([^/]+)(\/.*)$/
  const match = originalUrl.match(pattern)
  if (!(match && match.length > 2)) {
    throw new Error('Pattern not matched. Example: /proxy/client/endpoint')
  }
  const clientSlug = match[1]
  const currentEndpoint = match[2]
  return { clientSlug, currentEndpoint }
}
