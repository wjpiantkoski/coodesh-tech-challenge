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

    });

});