import TransactionRepository from "../infra/transaction/sequelize/repository/transaction.repository";
import FileTransactionService from "../domain/file/services/file-transaction.service";
import TransactionService from "../domain/transaction/services/transaction.service";

export default class ReadFileTransactionsUseCase {

    private _transactionRepository: TransactionRepository

    constructor(transactionRepository: TransactionRepository) {
        this._transactionRepository = transactionRepository
    }

    async execute(filepath: string): Promise<void> {
        const {fileTransactions} = await FileTransactionService.readFileTransactions(filepath)
        const normalizedTransactions = await TransactionService.normalizeTransactions(fileTransactions)

        await this._transactionRepository.createMany(normalizedTransactions)
    }

}