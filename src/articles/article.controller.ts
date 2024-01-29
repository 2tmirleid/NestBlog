import { Body, Controller, Get, Param, Post, Render } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { CreateArticleDto } from "../dto/create-article.dto";

@Controller('/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('/create')
  async createArticle(@Body() dto: CreateArticleDto) {
    return await this.articleService.createArticle(dto);
  }

  @Get()
  async getAllArticles() {
    return await this.articleService.getAllArticles();
  }

  @Get('/:title')
  @Render('article')
  async getArticle(@Param('title') title: string) {
    const article = await this.articleService.getArticleByTitle(title);

    return {
      article: article,
    };
  }
}