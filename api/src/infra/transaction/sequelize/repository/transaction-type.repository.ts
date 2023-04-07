import TransactionTypeRepositoryInterface
    from "../../../../domain/transaction/repositories/transaction-type-repository.interface";
import TransactionType from "../../../../domain/transaction/entities/transaction-type";
import TransactionTypeModel from "../models/transaction-type.model";

export default class TransactionTypeRepository implements TransactionTypeRepositoryInterface {
    async createMany(entities: TransactionType[]): Promise<void> {
        await TransactionTypeModel.bulkCreate(entities.map(entity => {
            return {
                id: entity._id,
                nature: entity.nature,
                description: entity.description
            }
        }))
    }

    findById(id: string): Promise<TransactionType> {
        return Promise.resolve(undefined);
    }
}