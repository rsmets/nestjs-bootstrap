import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // explicitly defining use of express platform (which is the default) ref: https://docs.nestjs.com/first-steps
  await app.listen(3000);
}
bootstrap();
