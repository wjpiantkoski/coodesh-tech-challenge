describe('FileTransaction', function () {

    it('should create file transaction with correct values', () => {
        const fileTransaction = new FileTransaction(
            '1',
            '2022-01-15T19:20:30-03:00',
            'CURSO DE BEM-ESTAR            ',
            '0000012750',
            'JOSE CARLOS'
        )

        expect(fileTransaction).toStrictEqual({
            id: '1',
            date: '2022-01-15T19:20:30-03:00',
            product: 'CURSO DE BEM-ESTAR            ',
            value: '0000012750',
            seller: 'JOSE CARLOS'
        })
    })

});