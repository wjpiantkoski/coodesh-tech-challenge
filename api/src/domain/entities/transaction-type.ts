import UniqueEntityId from "../@shared/value-object/unique-entity-id";
import RequiredPropertyError from "../@shared/errors/required-property.error";
import InvalidPropertyError from "../@shared/errors/invalid-property.error";

export enum TransactionTypeNumber {
    TypeOne = '1',
    TypeTwo = '2',
    TypeThree = '3',
    TypeFour = '4'
}

export enum TransactionNature {
    CashIn = 'cash-in',
    CashOut = 'cash-out'
}

export type TransactionProps = {
    typeNumber: TransactionTypeNumber,
    description: string,
    nature: TransactionNature
}
export default class TransactionType {

    public readonly _id: UniqueEntityId
    private _typeNumber: string
    private _description: string
    private _nature: string

    constructor(props: TransactionProps, id?: UniqueEntityId) {
        this._id = id || new UniqueEntityId()
        this._typeNumber = props.typeNumber
        this._description = props.description
        this._nature = props.nature

        this.validate()
    }

    get typeNumber(): string {
        return this._typeNumber
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