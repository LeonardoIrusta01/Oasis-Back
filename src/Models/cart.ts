import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "carts",
})
export class Cart extends Model {
    @Column({
        type: DataType.INTEGER,
    })
    idUser?: number
    @Column({
        type: DataType.INTEGER,
    })
    idProduct?: number
    @Column({
        type: DataType.INTEGER,
    })
    quantity?: number
}
