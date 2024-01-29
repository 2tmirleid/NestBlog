import { Injectable } from '@nestjs/common';
import { AuthorService } from "./authors/author.service";
import { ArticleService } from "./articles/article.service";

@Injectable()
export class AppService {
  constructor(private authorService: AuthorService,
              private articleService: ArticleService) {}

  async getAllAuthors() {
    return await this.authorService.getAllAuthors();
  }

  async getAllArticles() {
    return await this.articleService.getAllArticles();
  }
}
