import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './presentation/filters/httpException.filter'
import { ErrorsInterceptor } from './presentation/interceptors/ErrorsInterceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new ErrorsInterceptor())
  await app.listen(3000)
}
bootstrap()
