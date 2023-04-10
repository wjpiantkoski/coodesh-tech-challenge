import Transaction from "./transaction";
import InvalidPropertyError from "../../@shared/errors/invalid-property.error";
import RequiredPropertyError from "../../@shared/errors/required-property.error";
import ValidationError from "../../@shared/errors/validation.error";
import TransactionType, {TransactionNature} from "./transaction-type";
import InvalidUuidError from "../../@shared/errors/invalid-uuid.error";
import {v4 as uuidv4} from 'uuid'

describe('Transaction Entity', () => {
    const transactionType = new TransactionType(
        "1",
        TransactionNature.CashIn,
        "Description"
    )


    describe('Constructor', () => {

        it('should create transaction with correct values', () => {
            const id = uuidv4()

            const transaction = new Transaction({
                date: new Date(),
                product: 'Curso Online',
                value: 1000,
                seller: 'Test Seller',
                type: transactionType
            }, id)

            expect(transaction.date).toBeInstanceOf(Date)
            expect(transaction.product).toBe('Curso Online')
            expect(transaction.value).toBe(1000)
            expect(transaction.seller).toBe('Test Seller')
            expect(transaction._id).toBe(id)
            expect(transaction.type).toBeInstanceOf(TransactionType)
        })

        it('should throw an error when id is invalid', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: '',
                    value: 1000,
                    seller: 'Test Seller',
                    type: transactionType
                }, '123')
            }).toThrowError(InvalidUuidError)
        })

        it('should throw an error when product is empty', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: '',
                    value: 1000,
                    seller: 'Test Seller',
                    type: transactionType
                })
            }).toThrowError(RequiredPropertyError)
        })

        it('should throw an error when product is invalid', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: 'Extremely long product name to test',
                    value: 1000,
                    seller: 'Test Seller',
                    type: transactionType
                })
            }).toThrowError(InvalidPropertyError)
        })

        it('should throw an error when value is less than or equal zero', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: 'Curso Online',
                    value: -10,
                    seller: 'Test Seller',
                    type: transactionType
                })
            }).toThrowError(ValidationError)
        })

        it('should throw an error when seller is empty', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: 'Curso Online',
                    value: 10,
                    seller: '',
                    type: transactionType
                })
            }).toThrowError(RequiredPropertyError)
        })

        it('should throw an error when seller is invalid', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: 'Curso Online',
                    value: 10,
                    seller: 'Extremely long seller name to test',
                    type: transactionType
                })
            }).toThrowError(InvalidPropertyError)
        })

    });

});