import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/exception-filters/http-exception.filter';
import { logger } from './common/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // explicitly defining use of express platform (which is the default) ref: https://docs.nestjs.com/first-steps
  // app.use(logger); // binding functional middleware globally
  // app.useGlobalFilters(new HttpExceptionFilter()); // global scoped exception filter

  // Using a customer catch all exception filter with inheritance that is actually using a base filter. So just like the HttpExceptionFilter class.
  // ref: https://docs.nestjs.com/exception-filters#inheritance
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  await app.listen(3000);
}
bootstrap();
