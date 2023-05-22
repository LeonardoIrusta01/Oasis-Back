import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
    tableName: 'users'
})

export class User extends Model{
    @Column({
        type: DataType.STRING
    })
    firstName!: string

    @Column({
        type: DataType.STRING
    })
    lastName!: string

    @Column({
        type: DataType.STRING
    })
    email!: string

    @Column({
        type: DataType.BIGINT
    })
    cellphone!: number

    @Column({
        type: DataType.STRING
    })
    password!: string

    @Column({
        type: DataType.BOOLEAN
    })
    rol!: boolean

    @Column({
        type: DataType.BIGINT
    })
    dni!: number
}