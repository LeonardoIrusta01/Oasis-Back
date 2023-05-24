import { Table, Model, Column, DataType } from "sequelize-typescript";
import { Type } from "./type";

@Table({
  tableName: "products",
})
export class Product extends Model {
  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @Column({
    type: DataType.INTEGER,
  })
  price!: number;

  @Column({
    type: DataType.STRING,
  })
  image!: string;

  @Column({
    type: DataType.STRING,
  })
  description!: string;

  @Column({
    type: DataType.ENUM("Diabetic", "Veggetariano"),
  })
  category!: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  discount!: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  active!: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  stock!: boolean;

  @Column({
    type: DataType.INTEGER,
  })
  idType!: number;
}
