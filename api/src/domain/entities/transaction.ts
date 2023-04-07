export type TransactionType = {
    date: Date,
    product: string,
    value: number,
    seller: string
}
export default class Transaction {

    private _id: string
    private _date: Date
    private _product: string
    private _value: number
    private _seller: string

    constructor(props: TransactionType) {
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
            throw new Error('Product is required')
        } else if (this._product.length > 30) {
            throw new Error('Product is invalid')
        }

        if (this._value <= 0) {
            throw new Error('Value must be greater than 0')
        }
    }

}