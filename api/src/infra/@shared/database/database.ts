import {Sequelize} from "sequelize-typescript";
import {MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST} from "../../../env";
import TransactionTypeModel from "../../transaction/sequelize/models/transaction-type.model";
import TransactionModel from "../../transaction/sequelize/models/transaction.model";

export default class Database {

    databaseInstance: Sequelize

    async connect(): Promise<void> {
        this.databaseInstance = new Sequelize(
            MYSQL_DATABASE,
            MYSQL_USER,
            MYSQL_PASSWORD,
            {
                host: MYSQL_HOST,
                dialect: 'mysql'
            }
        )

        this.databaseInstance.addModels([
            TransactionTypeModel,
            TransactionModel
        ])

        await this.databaseInstance.sync()
    }

    async disconnect(): Promise<void> {
        await this.databaseInstance.close()
    }

}