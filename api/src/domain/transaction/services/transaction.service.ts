import FileTransaction from "../../file/entities/file-transaction";
import Transaction from "../entities/transaction";
import TransactionTypeRepository from "../../../infra/transaction/sequelize/repository/transaction-type.repository";
import {capitalize} from 'radash'

export default class TransactionService {

    static async normalizeTransactions(fileTransactions: FileTransaction[]): Promise<Transaction[]>{
        const transactionTypeRepository = new TransactionTypeRepository()
        const transactions = []

        for (let i = 0; i < fileTransactions.length; i++) {
            const item = fileTransactions[i]
            const transactionType = await transactionTypeRepository.findById(item.type)

            transactions.push(new Transaction({
                date: new Date(item.date),
                product: capitalize(item.product.trim()),
                value: Number.parseInt(item.value),
                seller: capitalize(item.seller.trim()),
                type: transactionType
            }))
        }

        return transactions
    }

}