import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ProxyAdapter } from './adapters/proxy/proxy.adapter'

@Module({
  imports: [HttpModule],
  providers: [ProxyAdapter],
  exports: [ProxyAdapter]
})
export class InfrastructureModule {}
