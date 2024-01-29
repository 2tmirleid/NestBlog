import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Article } from "../models/article.model";
import { CreateArticleDto } from "../dto/create-article.dto";

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article) private articleRepository: typeof Article) {}

  async createArticle(dto: CreateArticleDto) {
    return await this.articleRepository.create(dto);
  }

  async getAllArticles() {
    return await this.articleRepository.findAll({
      include: { all: true }
    });
  }

  async getArticleByTitle(title: string) {
    return await this.articleRepository.findOne({
      where: { title },
      include: { all: true }
    })
  }
}