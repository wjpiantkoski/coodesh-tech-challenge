import FileTransaction from "./file-transaction";
import RequiredPropertyError from "../../@shared/errors/required-property.error";
import InvalidPropertyError from "../../@shared/errors/invalid-property.error";

describe('FileTransaction', function () {

    it('should create file transaction with correct values', () => {
        const fileTransaction = new FileTransaction(
            '1',
            '2022-01-15T19:20:30-03:00',
            'CURSO DE BEM-ESTAR            ',
            '0000012750',
            'JOSE CARLOS'
        )

        expect(fileTransaction.type).toBe('1')
        expect(fileTransaction.value).toBe('0000012750')
        expect(fileTransaction.seller).toBe('JOSE CARLOS')
        expect(fileTransaction.date).toBe('2022-01-15T19:20:30-03:00')
        expect(fileTransaction.product).toBe('CURSO DE BEM-ESTAR            ')
    })

    it('should throw an error when type is empty', () => {
        expect(() => {
            new FileTransaction(
                '',
                '2022-01-15T19:20:30-03:00',
                'CURSO DE BEM-ESTAR            ',
                '0000012750',
                'JOSE CARLOS'
            )
        }).toThrow(RequiredPropertyError)
    })

    it('should throw an error when type is invalid', () => {
        expect(() => {
            new FileTransaction(
                '12',
                '2022-01-15T19:20:30-03:00',
                'CURSO DE BEM-ESTAR            ',
                '0000012750',
                'JOSE CARLOS'
            )
        }).toThrow(InvalidPropertyError)
    })

    it('should throw an error when date is empty', () => {
        expect(() => {
            new FileTransaction(
                '1',
                '',
                'CURSO DE BEM-ESTAR            ',
                '0000012750',
                'JOSE CARLOS'
            )
        }).toThrow(RequiredPropertyError)
    })

    it('should throw an error when date is invalid', () => {
        expect(() => {
            new FileTransaction(
                '1',
                '2022-01-15T19:20:30-03',
                'CURSO DE BEM-ESTAR            ',
                '0000012750',
                'JOSE CARLOS'
            )
        }).toThrow(InvalidPropertyError)
    })

    it('should throw an error when value is empty', () => {
        expect(() => {
            new FileTransaction(
                '1',
                '2022-01-15T19:20:30-03:00',
                'CURSO DE BEM-ESTAR            ',
                '',
                'JOSE CARLOS'
            )
        }).toThrow(RequiredPropertyError)
    })

    it('should throw an error when value is invalid', () => {
        expect(() => {
            new FileTransaction(
                '1',
                '2022-01-15T19:20:30-03:00',
                'CURSO DE BEM-ESTAR            ',
                '00000012750',
                'JOSE CARLOS'
            )
        }).toThrow(InvalidPropertyError)
    })

    it('should throw an error when seller is empty', () => {
        expect(() => {
            new FileTransaction(
                '1',
                '2022-01-15T19:20:30-03:00',
                'CURSO DE BEM-ESTAR            ',
                '0000012750',
                ''
            )
        }).toThrow(RequiredPropertyError)
    })

    it('should throw an error when seller is invalid', () => {
        expect(() => {
            new FileTransaction(
                '1',
                '2022-01-15T19:20:30-03:00',
                'CURSO DE BEM-ESTAR            ',
                '00000012750',
                'JOSE CARLOS JOSE CARLOS JOSE CARLOS'
            )
        }).toThrow(InvalidPropertyError)
    })

    it('should throw an error when product is empty', () => {
        expect(() => {
            new FileTransaction(
                '1',
                '2022-01-15T19:20:30-03:00',
                '',
                '0000012750',
                'JOSE CARLOS'
            )
        }).toThrow(RequiredPropertyError)
    })

    it('should throw an error when product is invalid', () => {
        expect(() => {
            new FileTransaction(
                '1',
                '2022-01-15T19:20:30-03:00',
                'CURSO DE BEM-ESTAR  CURSO DE BEM-ESTAR          ',
                '00000012750',
                'JOSE CARLOS'
            )
        }).toThrow(InvalidPropertyError)
    })
});