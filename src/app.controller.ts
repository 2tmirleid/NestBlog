import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async getMainPage() {
    const authors = await this.appService.getAllAuthors();
    const articles = await this.appService.getAllArticles();
    return {
      title: 'Main Page',
      authors: authors,
      articles: articles,
    };
  }
}
