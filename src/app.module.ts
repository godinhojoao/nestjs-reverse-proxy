import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { InfrastructureModule } from './infrastructure/infrastructure.module'

@Module({
  imports: [HttpModule, InfrastructureModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
