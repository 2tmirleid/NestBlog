import { BelongsTo, Column, DataType, ForeignKey, Table, Model } from "sequelize-typescript";
import { Author } from "./author.model";

interface ArticleCreationAttrs {
  title: string;
  content: string;
  userId: number;
}

@Table({ tableName: 'articles' })
export class Article extends Model<Article, ArticleCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  content: string;

  @ForeignKey(() => Author)
  @Column({ type: DataType.INTEGER })
  authorId: number;

  @BelongsTo(() => Author)
  author: Author[];
}