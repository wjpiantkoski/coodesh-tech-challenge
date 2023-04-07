import RequiredPropertyError from "../../@shared/errors/required-property.error";
import InvalidPropertyError from "../../@shared/errors/invalid-property.error";

export enum TransactionNature {
    CashIn = 'cash-in',
    CashOut = 'cash-out'
}
export default class TransactionType {

    public readonly _id: string
    private _description: string
    private _nature: string

    constructor(id: string, nature: string, description: string) {
        this._id = id
        this._nature = nature
        this._description = description

        this.validate()
    }

    get description(): string {
        return this._description
    }

    get nature(): string {
        return this._nature
    }

    private validate(): void {
        if (!this._description) {
            throw new RequiredPropertyError('Description')
        } else if (this._description.length > 50) {
            throw new InvalidPropertyError('Description')
        }
    }
}