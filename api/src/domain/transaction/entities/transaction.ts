import InvalidPropertyError from "../../@shared/errors/invalid-property.error";
import RequiredPropertyError from "../../@shared/errors/required-property.error";
import ValidationError from "../../@shared/errors/validation.error";
import TransactionType from "./transaction-type";
import {v4 as uuidv4, validate as uuidValidate} from 'uuid'
import InvalidUuidError from "../../@shared/errors/invalid-uuid.error";

export type TransactionProps = {
    date: Date,
    product: string,
    value: number,
    seller: string
    type: TransactionType
}
export default class Transaction {

    public readonly _id: string
    private _date: Date
    private _product: string
    private _value: number
    private _seller: string
    private _type: TransactionType

    constructor(props: TransactionProps, id?: string) {
        this._id = id || uuidv4()
        this._date = props.date
        this._product = props.product
        this._value = props.value
        this._seller = props.seller
        this._type = props.type

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

    get type(): TransactionType {
        return this._type
    }

    private validate(): void {
        if (!uuidValidate(this._id)) {
            throw new InvalidUuidError()
        }

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