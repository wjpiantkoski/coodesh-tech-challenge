import TransactionType, {TransactionNature} from "./transaction-type";
import RequiredPropertyError from "../../@shared/errors/required-property.error";
import InvalidPropertyError from "../../@shared/errors/invalid-property.error";

describe('TransactionType', () => {

    describe('Constructor', () => {

        it('should create transaction type with correct values', () => {
            const transactionType = new TransactionType("1", TransactionNature.CashIn, 'Venda produtor')

            expect(transactionType._id).toBe('1')
            expect(transactionType.description).toBe('Venda produtor')
            expect(transactionType.nature).toBe('cash-in')
        })

        it('should throw error when description is empty', () => {
            expect(() => {
                new TransactionType("1", TransactionNature.CashIn, '')
            }).toThrowError(RequiredPropertyError)
        })

        it('should throw error when description is invalid', () => {
            expect(() => {
                new TransactionType('1', TransactionNature.CashIn,
                    'Extremely long description to test during this challenge')
            }).toThrowError(InvalidPropertyError)
        })

    })

})