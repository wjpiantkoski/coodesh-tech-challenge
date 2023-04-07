import TransactionRepositoryInterface
    from "../../../../domain/transaction/repositories/transaction-repository.interface";
import Transaction from "../../../../domain/transaction/entities/transaction";
import TransactionModel from "../models/transaction.model";

export default class TransactionRepository implements TransactionRepositoryInterface {
    async createMany(entities: Transaction[]): Promise<void> {
        await TransactionModel.bulkCreate(entities.map(entity => {
            return {
                id: entity._id.id,
                product: entity.product,
                seller: entity.seller,
                value: entity.value,
                type_id: entity.type._id,
                date: entity.date
            }
        }))
    }

    findAll(): Promise<Transaction[]> {
        return Promise.resolve([]);
    }
}