import UniqueEntityId from "../@shared/value-object/unique-entity-id";

describe('TransactionType', () => {

    describe('Constructor', () => {

        it('should create transaction type with correct values', () => {
            const transactionType = new TransactionType({
                typeNumber: '1',
                description: 'Venda produtor',
                nature: 'cash-in'
            })

            expect(transactionType.typeNumber).toBe('1')
            expect(transactionType.description).toBe('Venda produtor')
            expect(transactionType.nature).toBe('cash-in')
            expect(transactionType._id).toBeInstanceOf(UniqueEntityId)
        })

    })

})