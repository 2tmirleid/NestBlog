import { Body, Controller, Get, Param, Post, Render } from "@nestjs/common";
import { AuthorService } from "./author.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { ArticleService } from "../articles/article.service";

@Controller('/authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post('/create')
  async createAuthor(@Body() dto: CreateUserDto) {
    return await this.authorService.createAuthor(dto);
  }

  @Get()
  async getAllAuthors() {
    return await this.authorService.getAllAuthors();
  }

  @Get('/:name')
  @Render('author')
  async getAuthorByEmail(@Param('name') name: string) {
    const author = await this.authorService.getAuthorByName(name);

    return {
      author: author,
    };
  }
}