import { clientURLS } from './clientsURLS'

export function getUrlByClient(clientSlug: string): string {
  const currentClientURL = clientURLS[clientSlug]
  if (!(currentClientURL && currentClientURL.length)) {
    throw new Error(`Client ${clientSlug} not found.`)
  }
  return currentClientURL
}
