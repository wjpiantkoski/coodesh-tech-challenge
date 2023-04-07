import InvalidPropertyError from "../@shared/errors/invalid-property.error";
import RequiredPropertyError from "../@shared/errors/required-property.error";
import ValidationError from "../@shared/errors/validation.error";
import UniqueEntityId from "../@shared/value-object/unique-entity-id";

export type TransactionType = {
    date: Date,
    product: string,
    value: number,
    seller: string
}
export default class Transaction {

    public readonly _id: UniqueEntityId
    private _date: Date
    private _product: string
    private _value: number
    private _seller: string

    constructor(props: TransactionType, id?: UniqueEntityId) {
        this._id = id || new UniqueEntityId()
        this._date = props.date
        this._product = props.product
        this._value = props.value
        this._seller = props.seller

        this.validate()
    }

    get date(): Date {
        return this._date
    }

    get product(): string {
        return this._product
    }

    get value(): number {
        return this._value
    }

    get seller(): string {
        return this._seller
    }

    private validate(): void {
        if (!this._product) {
            throw new RequiredPropertyError('Product')
        } else if (this._product.length > 30) {
            throw new InvalidPropertyError('Product')
        }

        if (this._value <= 0) {
            throw new ValidationError('Value must be greater than 0')
        }

        if (!this._seller) {
            throw new RequiredPropertyError('Seller')
        } else if (this._seller.length > 20) {
            throw new InvalidPropertyError('Seller')
        }
    }

}