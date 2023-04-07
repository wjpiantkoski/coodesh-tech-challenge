export default class FileTransaction {

    private _id: string
    private _date: string
    private _product: string
    private _value: string
    private _seller: string

    constructor(id: string, date: string, product: string, value: string, seller: string) {
        this._id = id
        this._date = date
        this._value = value
        this._seller = seller
        this._product = product
    }

    get id(): string {
        return this._id
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

}