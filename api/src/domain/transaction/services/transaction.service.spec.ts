import {Sequelize} from "sequelize-typescript";
import TransactionTypeModel from "../../../infra/transaction/sequelize/models/transaction-type.model";
import TransactionModel from "../../../infra/transaction/sequelize/models/transaction.model";
import TransactionTypeService from "./transaction-type.service";

describe('TransactionService', () => {

    let sequelize: Sequelize

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ":memory:",
            logging: false,
            sync: {force: true}
        })

        sequelize.addModels([
            TransactionTypeModel,
            TransactionModel
        ])

        await sequelize.sync()

        await TransactionTypeService.populateTransactionTypes()
    })

    afterEach(async () => {
        await sequelize.close()
    })

});