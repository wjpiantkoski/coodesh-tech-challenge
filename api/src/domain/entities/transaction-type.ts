import UniqueEntityId from "../@shared/value-object/unique-entity-id";

export type TransactionProps = {
    typeNumber: string,
    description: string,
    nature: string
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
}