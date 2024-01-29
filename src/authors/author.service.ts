import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Author } from "../models/author.model";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author) private authorRepository: typeof Author) {}

  async createAuthor(dto: CreateUserDto) {
    return await this.authorRepository.create(dto);
  }

  async getAllAuthors() {
    return await this.authorRepository.findAll({
      include: { all: true }
    });
  }

  async getAuthorByName(name) {
    return await this.authorRepository.findOne({
      where: { name },
      include: { all: true }
    })
  }
}