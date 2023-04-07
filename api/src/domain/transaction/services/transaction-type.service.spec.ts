import TransactionType, {TransactionNature} from "../entities/transaction-type";
import TransactionTypeModel from "../../../infra/transaction/sequelize/models/transaction-type.model";
import TransactionTypeService from "./transaction-type.service";
import {Sequelize} from "sequelize-typescript";

describe('TransactionTypeService', () => {

    let sequelize: Sequelize

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ":memory:",
            logging: false,
            sync: {force: true}
        })

        sequelize.addModels([TransactionTypeModel])

        await sequelize.sync()
    })

    afterEach(async () => {
        await sequelize.close()
    })

    it('should populate transaction type', async () => {
        const transactionTypes = [
            new TransactionType('1', TransactionNature.CashIn, 'Venda produtor'),
            new TransactionType('2', TransactionNature.CashIn, 'Venda afiliado'),
            new TransactionType('3', TransactionNature.CashOut, 'Comissão paga'),
            new TransactionType('4', TransactionNature.CashIn, 'Comissão recebida'),
        ]

        await TransactionTypeService.populateTransactionTypes(transactionTypes)

        const foundTransactionTypes = await TransactionTypeModel.findAll()

        expect(foundTransactionTypes[0].id).toBe(transactionTypes[0]._id)
        expect(foundTransactionTypes[1].id).toBe(transactionTypes[1]._id)
        expect(foundTransactionTypes[2].id).toBe(transactionTypes[2]._id)
        expect(foundTransactionTypes[3].id).toBe(transactionTypes[3]._id)
    })

});