import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "users",
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
  })
  image!: string;

  @Column({
    type: DataType.BIGINT,
  })
  cellphone!: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  admin!: boolean;

  @Column({
    type: DataType.BIGINT,
  })
  dni!: number;
  @Column({
    type: DataType.INTEGER,
  })
  idCart!: number;
}
