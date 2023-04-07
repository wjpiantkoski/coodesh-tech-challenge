import Transaction from "./transaction";

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
        })

        it('should throw an error when product is empty', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: '',
                    value: 1000,
                    seller: 'Test Seller'
                })
            }).toThrowError('Product is required')
        })

        it('should throw an error when product is invalid', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: 'Extremely long product name to test',
                    value: 1000,
                    seller: 'Test Seller'
                })
            }).toThrowError('Product is invalid')
        })

        it('should throw an error when value is less than or equal zero', () => {
            expect(() => {
                new Transaction({
                    date: new Date(),
                    product: 'Curso Online',
                    value: -10,
                    seller: 'Test Seller'
                })
            }).toThrowError('Value must be greater than 0')
        })

    });

});