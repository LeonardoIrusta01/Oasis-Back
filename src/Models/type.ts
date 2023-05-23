import { Table, Model, Column, DataType } from "sequelize-typescript";
import { Product } from "./product";

@Table({
  tableName: "types",
})
export class Type extends Model {
  @Column({
    type: DataType.STRING,
  })
  name!: string;
  @Column({
    type: DataType.STRING,
  })
  image!: string;
}
