import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Author } from "../models/author.model";
import { Article } from "../models/article.model";
import { AuthorService } from "./author.service";
import { AuthorController } from "./author.controller";

@Module({
  imports: [
    SequelizeModule.forFeature([Author, Article]),
  ],
  exports: [
    AuthorService
  ],
  providers: [AuthorService],
  controllers: [AuthorController],
})
export class AuthorModule {}