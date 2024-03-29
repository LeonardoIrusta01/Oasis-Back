import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "carts",
})
export class Cart extends Model {
    @Column({
        type: DataType.INTEGER,
    })
    total!: number
}