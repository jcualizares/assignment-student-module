import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3277);
=======
  await app.listen(process.env.PORT ?? 7070);
}
bootstrap();
