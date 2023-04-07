import {Column, ForeignKey, HasOne, Model, PrimaryKey} from "sequelize-typescript";
import TransactionTypeModel from "./transaction-type.model";

export default class TransactionModel extends Model {

    @PrimaryKey
    @Column
    declare id: string

    @ForeignKey(() => TransactionTypeModel)
    @Column({allowNull: false})
    declare type_id: string

    @HasOne(() => TransactionTypeModel)
    declare type: TransactionTypeModel

    @Column({allowNull: false})
    declare date: Date

    @Column({allowNull: false})
    declare product: string

    @Column({allowNull: false})
    declare value: number

    @Column({allowNull: false})
    declare seller: string

}