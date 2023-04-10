import TransactionTypeRepositoryInterface
    from "../../../../domain/transaction/repositories/transaction-type-repository.interface";
import TransactionType, {TransactionNature} from "../../../../domain/transaction/entities/transaction-type";
import TransactionTypeModel from "../models/transaction-type.model";
import NotFoundEntityError from "../../../@shared/errors/NotFoundEntity.error";

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

    async findById(id: string): Promise<TransactionType> {
        let transactionTypeModel

        try {
            transactionTypeModel = await TransactionTypeModel.findOne({
                where: { id },
                rejectOnEmpty: true
            })
        } catch (err) {
            throw new NotFoundEntityError('TransactionType')
        }

        const transactionNatureKey = Object.values(TransactionNature).indexOf(transactionTypeModel.nature)
        const transactionNature = Object.keys(TransactionNature)[transactionNatureKey]

        return new TransactionType(
            transactionTypeModel.id,
            TransactionNature[transactionNature],
            transactionTypeModel.description
        )
    }

    async count(): Promise<number> {
        return TransactionTypeModel.count()
    }
}