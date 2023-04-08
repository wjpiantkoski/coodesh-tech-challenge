import TransactionRepositoryInterface
    from "../../../../domain/transaction/repositories/transaction-repository.interface";
import Transaction from "../../../../domain/transaction/entities/transaction";
import TransactionModel from "../models/transaction.model";
import TransactionType, {TransactionNature} from "../../../../domain/transaction/entities/transaction-type";
import TransactionTypeModel from "../models/transaction-type.model";

export default class TransactionRepository implements TransactionRepositoryInterface {
    async createMany(entities: Transaction[]): Promise<void> {
        await TransactionModel.bulkCreate(entities.map(entity => {
            return {
                id: entity._id,
                product: entity.product,
                seller: entity.seller,
                value: entity.value,
                type_id: entity.type._id,
                date: entity.date
            }
        }))
    }

    async findAll(): Promise<Transaction[]> {
        const transactionModels = await TransactionModel.findAll({
            include: [
                {
                    model: TransactionTypeModel,
                    required: true
                }
            ]
        })

        const transactions = transactionModels.map(item => {
            const transactionNatureKey = Object.values(TransactionNature).indexOf(item.type.nature)
            const transactionNature = Object.keys(TransactionNature)[transactionNatureKey]

            return new Transaction({
                date: item.date,
                seller: item.seller,
                product: item.product,
                value: item.value,
                type: new TransactionType(
                    item.type.id,
                    TransactionNature[transactionNature],
                    item.type.description
                )
            }, item.id)
        })

        return transactions
    }
}