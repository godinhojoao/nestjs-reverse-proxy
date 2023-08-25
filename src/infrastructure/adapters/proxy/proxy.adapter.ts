import { HttpService } from '@nestjs/axios'
import { HttpStatus, Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'
import { extractInfosFromOriginalURL } from './../../../helpers/extractInfosFromOriginalURL/extractInfosFromOriginalURL'
import { getHostFromUrl } from './../../../helpers/getHostFromUrl/getHostFromUrl'
import { getUrlByClient } from './../../../helpers/getUrlByClient/getUrlByClient'

type ProxyRequest = {
  originalUrl: string
  method: string
  body: Record<string, unknown>
  headers: any
}

type ProxyResponse = {
  status: number
  data: Record<string, unknown>
}

@Injectable()
export class ProxyAdapter {
  private lastSuccessfulResponse: ProxyResponse | null = null

  constructor(private readonly httpService: HttpService) {}

  async execute({ originalUrl, method, body, headers }: ProxyRequest): Promise<ProxyResponse> {
    const { clientSlug, currentEndpoint } = extractInfosFromOriginalURL(originalUrl)
    const currentClientURL = getUrlByClient(clientSlug)
    const currentHostName = getHostFromUrl(currentClientURL)
    const apiUrl = `${currentClientURL}${currentEndpoint}`
    headers.host = currentHostName

    try {
      const response$ = this.httpService.request({
        method: method,
        url: apiUrl,
        data: body,
        headers: headers
      })
      const response = await firstValueFrom(response$)

      this.lastSuccessfulResponse = {
        status: response.status,
        data: response.data
      }

      return this.lastSuccessfulResponse
    } catch (error) {
      if (error.response && error.response.status === HttpStatus.NOT_MODIFIED && this.lastSuccessfulResponse) {
        return this.lastSuccessfulResponse
      }
      error.requestInfos = { apiUrl, headers }
      throw error
    }
  }
}
