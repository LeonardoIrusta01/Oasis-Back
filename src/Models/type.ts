import { Table, Model, Column, DataType } from "sequelize-typescript";

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
