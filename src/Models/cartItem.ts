import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "cartItems",
})
export class CartItem extends Model {
    @Column({
        type: DataType.INTEGER,
    })
    quantity!: number
}