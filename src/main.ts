import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SuccessInterceptor } from './common/interceptors/success.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });
  app.useGlobalInterceptors(new SuccessInterceptor());

  await app.listen(process.env.MAIN_PORT);
  Logger.log(`Application runnin on port ${process.env.MAIN_PORT}`);
}
bootstrap();
