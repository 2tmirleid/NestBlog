import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";
import * as date from "./utils/date";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(__dirname, '..', '/src/public'));
  app.setViewEngine('hbs');

  await app.listen(PORT, () => {
    console.log(`[${date.DateNow.dateNow}] :: [Application has been started]`);
  });
}
bootstrap();
