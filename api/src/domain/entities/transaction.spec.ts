import Transaction from "./transaction";
import InvalidPropertyError from "../@shared/errors/invalid-property.error";
import RequiredPropertyError from "../@shared/errors/required-property.error";
import ValidationError from "../@shared/errors/validation.error";
import UniqueEntityId from "../@shared/value-object/unique-entity-id";

describe('Transaction Entity', () => {

    describe('Constructor', () => {

        it('should create transaction with correct values', () => {
            const transaction = new Transaction({
                date: new Date(),
                product: 'Curso Online',
                value: 1000,
                seller: 'Test Seller'
            })

            expect(transaction.date).toBeInstanceOf(Date)
            expect(transaction.product).toBe('Curso Online')
            expect(transaction.value).toBe(1000)
            expect(transaction.seller).toBe('Test Seller')
            expect(transaction._id).toBeInstanceOf(UniqueEntityId)
        })

        it('should throw an error when product is empty', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: '',
                    value: 1000,
                    seller: 'Test Seller'
                })
            }).toThrowError(RequiredPropertyError)
        })

        it('should throw an error when product is invalid', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: 'Extremely long product name to test',
                    value: 1000,
                    seller: 'Test Seller'
                })
            }).toThrowError(InvalidPropertyError)
        })

        it('should throw an error when value is less than or equal zero', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: 'Curso Online',
                    value: -10,
                    seller: 'Test Seller'
                })
            }).toThrowError(ValidationError)
        })

        it('should throw an error when seller is empty', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: 'Curso Online',
                    value: 10,
                    seller: ''
                })
            }).toThrowError(RequiredPropertyError)
        })

        it('should throw an error when seller is invalid', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: 'Curso Online',
                    value: 10,
                    seller: 'Extremely long seller name to test'
                })
            }).toThrowError(InvalidPropertyError)
        })

    });

});