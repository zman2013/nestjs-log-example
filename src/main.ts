import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getLog } from 'nestjs-log'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: getLog('system').loggerService
  });
  await app.listen(3000);
}
bootstrap();
