import TransactionType from "../entities/transaction-type";
import TransactionTypeRepository from "../../../infra/transaction/sequelize/repository/transaction-type.repository";

export default class TransactionTypeService {

    static async populateTransactionTypes(transactionTypes: TransactionType[]): Promise<void> {
        const transactionTypeRepository = new TransactionTypeRepository()
        await transactionTypeRepository.createMany(transactionTypes)
    }

}