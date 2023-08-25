import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, Logger, NestInterceptor } from '@nestjs/common'
import { Observable, ObservableInput } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ErrorsInterceptor.name)

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(catchError((error) => ErrorsInterceptor.checkError(error, this.logger)))
  }

  static checkError(error: any, logger: Logger): ObservableInput<any> {
    logger.error(
      JSON.stringify({
        message: error.message,
        stack: error.stack,
        requestInfos: error.requestInfos || { message: 'No request infos' }
      })
    )

    const status = error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR
    const internalServerDetails = {
      message: 'Internal Server Error',
      statusCode: status
    }
    const response = error instanceof HttpException ? error.getResponse() : internalServerDetails

    throw new HttpException(response, status)
  }
}
