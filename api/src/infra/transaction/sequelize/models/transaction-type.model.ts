import {Column, DataType, Model, PrimaryKey} from "sequelize-typescript";

export default class TransactionTypeModel extends Model {

    @PrimaryKey
    @Column
    declare id: string

    @Column({
        allowNull: false,
        type: DataType.ENUM('cash-in', 'cash-out')
    })
    declare nature: string

    @Column({
        allowNull:false,
        type: DataType.STRING(50)
    })
    declare description: string

}