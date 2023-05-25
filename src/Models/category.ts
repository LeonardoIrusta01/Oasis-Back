import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "categories",
})
export class Category extends Model {
  @Column({
    type: DataType.STRING,
  })
  name!: string;
  @Column({
    type: DataType.STRING,
  })
  image!: string;
}
