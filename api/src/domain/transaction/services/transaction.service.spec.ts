import {Sequelize} from "sequelize-typescript";
import TransactionTypeModel from "../../../infra/transaction/sequelize/models/transaction-type.model";
import TransactionModel from "../../../infra/transaction/sequelize/models/transaction.model";
import TransactionTypeService from "./transaction-type.service";
import Transaction from "../entities/transaction";
import TransactionType, {TransactionNature} from "../entities/transaction-type";
import TransactionService from "./transaction.service";
import FileTransaction from "../../file/entities/file-transaction";

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

    it('should normalize transaction', async () => {
        const fileLines = [
            new FileTransaction(
                '1',
                '2022-01-15T19:20:30-03:00',
                'CURSO DE BEM-ESTAR            ',
                '0000012750',
                'JOSE CARLOS'
            ),
            new FileTransaction(
                '1',
                '2021-12-03T11:46:02-03:00',
                'DOMINANDO INVESTIMENTOS       ',
                '0000050000',
                'MARIA CANDIDA'
            )
        ]

        const transactions = await TransactionService.normalizeTransactions(fileLines)

        expect(transactions[0]).toBeInstanceOf(Transaction)
        expect(transactions[1]).toBeInstanceOf(Transaction)
    })
});