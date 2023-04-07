import UniqueEntityId from "../@shared/value-object/unique-entity-id";
import TransactionType, {TransactionNature, TransactionTypeNumber} from "./transaction-type";

describe('TransactionType', () => {

    describe('Constructor', () => {

        it('should create transaction type with correct values', () => {
            const transactionType = new TransactionType({
                typeNumber: TransactionTypeNumber.TypeOne,
                description: 'Venda produtor',
                nature: TransactionNature.CashIn
            })

            expect(transactionType.typeNumber).toBe('1')
            expect(transactionType.description).toBe('Venda produtor')
            expect(transactionType.nature).toBe('cash-in')
            expect(transactionType._id).toBeInstanceOf(UniqueEntityId)
        })

        it('should throw error when typeNumber is invalid', () => {

        })

    })

})