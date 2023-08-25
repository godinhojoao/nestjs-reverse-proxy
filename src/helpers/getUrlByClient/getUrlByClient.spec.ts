import { getUrlByClient } from './getUrlByClient'

describe('getUrlByClient', () => {
  it('should return URL for a valid clientSlug [0]', () => {
    const clientSlug = 'another_url_to_send_requests'
    const result = getUrlByClient(clientSlug)

    expect(result).toBe('https://www.another_url_to_send_requests.com')
  })

  it('should return URL for a valid clientSlug [1]', () => {
    const clientSlug = 'local'
    const result = getUrlByClient(clientSlug)

    expect(result).toBe('http://localhost:9000')
  })

  it('should throw an error for an invalid clientSlug', () => {
    const invalidClientSlug = 'invalid-client'

    expect(() => getUrlByClient(invalidClientSlug)).toThrowError('Client invalid-client not found.')
  })
})
