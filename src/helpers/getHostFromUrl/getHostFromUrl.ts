export function getHostFromUrl(clientUrl: string): string {
  try {
    const url = new URL(clientUrl)
    return url.hostname
  } catch (error) {
    throw new Error(`Invalid URL: ${clientUrl}.`)
  }
}
