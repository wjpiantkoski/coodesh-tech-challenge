import FileTransaction from "./file-transaction";

describe('FileTransaction', function () {

    it('should create file transaction with correct values', () => {
        const fileTransaction = new FileTransaction(
            '1',
            '2022-01-15T19:20:30-03:00',
            'CURSO DE BEM-ESTAR            ',
            '0000012750',
            'JOSE CARLOS'
        )

        expect(fileTransaction.id).toBe('1')
        expect(fileTransaction.value).toBe('0000012750')
        expect(fileTransaction.seller).toBe('JOSE CARLOS')
        expect(fileTransaction.date).toBe('2022-01-15T19:20:30-03:00')
        expect(fileTransaction.product).toBe('CURSO DE BEM-ESTAR            ')
    })

});