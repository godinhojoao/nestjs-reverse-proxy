import { HttpService } from '@nestjs/axios'
import { Test } from '@nestjs/testing'
import { of } from 'rxjs'
import { ProxyAdapter } from './proxy.adapter'

describe('ProxyAdapter', () => {
  let proxyAdapter: ProxyAdapter
  let httpService: HttpService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        ProxyAdapter,
        {
          provide: HttpService,
          useValue: {
            request: jest.fn()
          }
        }
      ]
    }).compile()

    proxyAdapter = moduleRef.get<ProxyAdapter>(ProxyAdapter)
    httpService = moduleRef.get<HttpService>(HttpService)
  })

  it('should return the response from the API successfuly', async () => {
    const mockResponse = {
      status: 200,
      data: { message: 'Success' }
    }

    jest.spyOn(httpService, 'request').mockReturnValueOnce(of(mockResponse as any))

    const request = {
      originalUrl: '/proxy/local/api/endpoint',
      method: 'GET',
      body: {},
      headers: {}
    }

    const result = await proxyAdapter.execute(request)

    expect(result).toEqual(mockResponse)
  })

  it('should return the response from the API with error', async () => {
    const mockResponse = {
      status: 400,
      data: { message: 'Error' }
    }

    jest.spyOn(httpService, 'request').mockReturnValueOnce(of(mockResponse as any))

    const request = {
      originalUrl: '/proxy/local/api/endpoint',
      method: 'GET',
      body: {},
      headers: {}
    }

    const result = await proxyAdapter.execute(request)

    expect(result).toEqual(mockResponse)
  })
})
