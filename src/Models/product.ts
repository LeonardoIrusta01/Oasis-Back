import { Table, Model, Column, DataType } from "sequelize-typescript";

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
    type: DataType.ENUM('Diabetic', 'Veggetariano'),
  })
  type!: string;

  @Column({
    type: DataType.STRING,
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
}
