import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "orders",
})
export class Order extends Model {
  @Column({
    type: DataType.INTEGER,
  })
  price!: number;
  @Column({
    type: DataType.ENUM("Success", "Pending", "Rejected"),
    defaultValue: "Pending",
  })
  status!: string;
  @Column({
    type: DataType.ENUM("MP", "Cash"),
  })
  paymentMethod!: string;
  @Column({
    type: DataType.INTEGER,
  })
  idUser!: number;
}
