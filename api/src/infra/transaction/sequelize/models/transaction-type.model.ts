import {Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table({
    tableName: 'transaction-types',
    timestamps: false
})
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