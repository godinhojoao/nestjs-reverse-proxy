import { extractInfosFromOriginalURL } from './extractInfosFromOriginalURL'

describe('extractInfosFromOriginalURL', () => {
  it('Given valid URL should return correct infos', async () => {
    const result = extractInfosFromOriginalURL('/proxy/test-slug/test-endpoint/id2')

    expect(result).toEqual({
      clientSlug: 'test-slug',
      currentEndpoint: '/test-endpoint/id2'
    })
  })

  it('Given invalid URL should return error', async () => {
    const invalidURLCall = () => {
      extractInfosFromOriginalURL('https://dale.com')
    }
    expect(invalidURLCall).toThrowError('Pattern not matched. Example: /proxy/client/endpoint')
  })
})
