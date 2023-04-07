import UniqueEntityId from "../../@shared/value-object/unique-entity-id";
import TransactionType, {TransactionNature, TransactionTypeNumber} from "./transaction-type";
import RequiredPropertyError from "../../@shared/errors/required-property.error";
import InvalidPropertyError from "../../@shared/errors/invalid-property.error";

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

        it('should throw error when description is empty', () => {
            expect(() => {
                new TransactionType({
                    typeNumber: TransactionTypeNumber.TypeOne,
                    description: '',
                    nature: TransactionNature.CashIn
                })
            }).toThrowError(RequiredPropertyError)
        })

        it('should throw error when description is invalid', () => {
            expect(() => {
                new TransactionType({
                    typeNumber: TransactionTypeNumber.TypeOne,
                    description: 'Extremely long description to test during this challenge',
                    nature: TransactionNature.CashIn
                })
            }).toThrowError(InvalidPropertyError)
        })

    })

})