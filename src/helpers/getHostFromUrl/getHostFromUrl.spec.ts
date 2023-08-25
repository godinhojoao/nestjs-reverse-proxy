import { getHostFromUrl } from './getHostFromUrl'

describe('getHostFromUrl', () => {
  it('should extract host from a valid URL', () => {
    const clientUrl = 'http://example.com/path'
    const result = getHostFromUrl(clientUrl)

    expect(result).toBe('example.com')
  })

  it('should throw an error for an invalid URL', () => {
    const invalidUrl = 'invalid-url'

    expect(() => getHostFromUrl(invalidUrl)).toThrowError('Invalid URL: invalid-url.')
  })
})
