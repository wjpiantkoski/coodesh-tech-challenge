import TransactionRepository from "../infra/transaction/sequelize/repository/transaction.repository";
import Transaction from "../domain/transaction/entities/transaction";
import {group, sum} from 'radash'

type TransactionListItem = {
    seller: string,
    total: number,
    transactions: Transaction[]
}

type TransactionsList = {
    items: TransactionListItem[],
    total: number
}

export default class ListGroupedTransactionsUseCase {

    private _transactionRepository: TransactionRepository

    constructor(transactionRepository: TransactionRepository) {
        this._transactionRepository = transactionRepository
    }

    async execute(): Promise<TransactionsList> {
        const transactions = await this._transactionRepository.findAll()
        const groupedTransactions = group(transactions, tr => tr.seller)

        const sellers = Object.keys(groupedTransactions)

        const transactionsList: TransactionsList = {
            items: [],
            total: 0
        }

        sellers.forEach(seller => {
            const sellerItems = groupedTransactions[seller]

            const total = sum(sellerItems, item => {
                return item.type.nature === 'cash-out' ? item.value * -1 : item.value
            })

            transactionsList.items.push({
                seller,
                total,
                transactions: sellerItems
            })
        })

        transactionsList.total = sum(transactions, item => {
            return item.type.nature === 'cash-out' ? item.value * -1 : item.value
        })


        return transactionsList
    }

}