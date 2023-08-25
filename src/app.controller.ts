import { Controller, Delete, Get, Patch, Post, Put, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { ProxyAdapter } from './infrastructure/adapters/proxy/proxy.adapter'

@Controller('proxy')
export class AppController {
  constructor(private readonly proxyAdapter: ProxyAdapter) {}

  @Get('*')
  async getProxy(@Req() req: Request, @Res() res: Response) {
    const response = await this.proxyAdapter.execute({
      originalUrl: req.originalUrl,
      method: 'GET',
      body: req.body,
      headers: req.headers
    })
    return res.status(response.status).send(response.data)
  }

  @Post('*')
  async postProxy(@Req() req: Request, @Res() res: Response) {
    const response = await this.proxyAdapter.execute({
      originalUrl: req.originalUrl,
      method: 'POST',
      body: req.body,
      headers: req.headers
    })
    return res.status(response.status).json(response.data)
  }

  @Put('*')
  async putProxy(@Req() req: Request, @Res() res: Response) {
    const response = await this.proxyAdapter.execute({
      originalUrl: req.originalUrl,
      method: 'PUT',
      body: req.body,
      headers: req.headers
    })
    return res.status(response.status).json(response.data)
  }

  @Patch('*')
  async patchProxy(@Req() req: Request, @Res() res: Response) {
    const response = await this.proxyAdapter.execute({
      originalUrl: req.originalUrl,
      method: 'PATCH',
      body: req.body,
      headers: req.headers
    })
    return res.status(response.status).json(response.data)
  }

  @Delete('*')
  async deleteProxy(@Req() req: Request, @Res() res: Response) {
    const response = await this.proxyAdapter.execute({
      originalUrl: req.originalUrl,
      method: 'DELETE',
      body: req.body,
      headers: req.headers
    })
    return res.status(response.status).json(response.data)
  }
}
