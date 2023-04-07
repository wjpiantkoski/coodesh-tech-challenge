import RequiredPropertyError from "../../@shared/errors/required-property.error";
import InvalidPropertyError from "../../@shared/errors/invalid-property.error";

export default class FileTransaction {

    private _type: string
    private _date: string
    private _product: string
    private _value: string
    private _seller: string

    constructor(type: string, date: string, product: string, value: string, seller: string) {
        this._type = type
        this._date = date
        this._value = value
        this._seller = seller
        this._product = product

        this.validate()
    }

    get type(): string {
        return this._type
    }

    get date(): string {
        return this._date
    }

    get value(): string {
        return this._value
    }

    get seller(): string {
        return this._seller
    }

    get product(): string {
        return this._product
    }

    private validate(): void {
        if (!this._type) {
            throw new RequiredPropertyError('Type')
        } else if (this._type.length > 1) {
            throw new InvalidPropertyError('Type')
        }

        if (!this._date) {
            throw new RequiredPropertyError('Date')
        } else if (this._date.length !== 25) {
            throw new InvalidPropertyError('Date')
        }

        if (!this._value) {
            throw new RequiredPropertyError('Value')
        } else if (this._value.length > 10) {
            throw new InvalidPropertyError('Value')
        }

        if (!this._seller) {
            throw new RequiredPropertyError('Seller')
        } else if (this._seller.length > 20) {
            throw new InvalidPropertyError('Seller')
        }

        if (!this._product) {
            throw new RequiredPropertyError('Product')
        } else if (this._product.length > 30) {
            throw new InvalidPropertyError('Product')
        }
    }
}