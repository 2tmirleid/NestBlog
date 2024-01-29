import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Author } from "./models/author.model";
import { Article } from "./models/article.model";
import { AuthorModule } from "./authors/author.module";
import { ArticleModule } from "./articles/article.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Author, Article],
      synchronize: true,
      autoLoadModels: true,
    }),
    ArticleModule,
    AuthorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
