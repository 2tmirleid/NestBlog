import { Column, DataType, HasMany, HasOne, Table, Model } from "sequelize-typescript";
import { Article } from "./article.model";

interface AuthorCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'authors' })
export class Author extends Model<Author, AuthorCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false} )
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  bio: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false})
  password: string;

  @HasOne(() => Article)
  articles: Article[];
}