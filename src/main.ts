import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // explicitly defining use of express platform (which is the default) ref: https://docs.nestjs.com/first-steps
  app.use(logger); // binding functional middleware globally
  await app.listen(3000);
}
bootstrap();
