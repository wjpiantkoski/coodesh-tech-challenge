import TransactionRepository from "../infra/transaction/sequelize/repository/transaction.repository";
import Transaction from "../domain/transaction/entities/transaction";

export default class ListGroupedTransactionsUseCase {

    private _transactionRepository: TransactionRepository

    constructor(transactionRepository: TransactionRepository) {
        this._transactionRepository = transactionRepository
    }

    async execute(): Promise<Transaction[]> {
        const transactions = await this._transactionRepository.findAll()
        return transactions
    }

}