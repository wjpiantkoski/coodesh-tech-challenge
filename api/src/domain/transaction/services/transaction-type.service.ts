import TransactionType, {TransactionNature} from "../entities/transaction-type";
import TransactionTypeRepository from "../../../infra/transaction/sequelize/repository/transaction-type.repository";

export default class TransactionTypeService {

    static async populateTransactionTypes(): Promise<void> {
        const transactionTypeRepository = new TransactionTypeRepository()
        const totalTransactionTypes = await transactionTypeRepository.count()

        if (!totalTransactionTypes) {
            const transactionTypes = [
                new TransactionType('1', TransactionNature.CashIn, 'Venda produtor'),
                new TransactionType('2', TransactionNature.CashIn, 'Venda afiliado'),
                new TransactionType('3', TransactionNature.CashOut, 'Comissão paga'),
                new TransactionType('4', TransactionNature.CashIn, 'Comissão recebida'),
            ]

            await transactionTypeRepository.createMany(transactionTypes)
        }
    }

}