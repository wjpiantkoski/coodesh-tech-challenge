import TransactionType, {TransactionNature} from "../entities/transaction-type";
import TransactionTypeModel from "../../../infra/transaction/sequelize/models/transaction-type.model";

describe('TransactionTypeService', () => {

    it('should populate transaction type', async () => {
        const transactionTypes = [
            new TransactionType('1', TransactionNature.CashIn, 'Venda produtor'),
            new TransactionType('2', TransactionNature.CashIn, 'Venda afiliado'),
            new TransactionType('3', TransactionNature.CashOut, 'Comissão paga'),
            new TransactionType('4', TransactionNature.CashIn, 'Comissão recebida'),
        ]

        await TransactionTypeService.populateDatabase(transactionTypes)

        const foundTransactionTypes = await TransactionTypeModel.findAll()

        expect(foundTransactionTypes[0].id).toBe(transactionTypes[0]._id)
        expect(foundTransactionTypes[1].id).toBe(transactionTypes[1]._id)
        expect(foundTransactionTypes[2].id).toBe(transactionTypes[2]._id)
        expect(foundTransactionTypes[3].id).toBe(transactionTypes[3]._id)
    })

});