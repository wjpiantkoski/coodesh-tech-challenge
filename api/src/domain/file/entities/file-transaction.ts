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

}