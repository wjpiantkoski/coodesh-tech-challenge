import {v4 as uuidv4, validate as uuidValidate} from 'uuid'
import InvalidUuidError from "../errors/invalid-uuid.error";

export default class UniqueEntityId {

    constructor(public readonly id?: string) {
        this.id = id || uuidv4()
        this.validate()
    }

    private validate(): void {
        if (!uuidValidate(this.id)) {
            throw new InvalidUuidError()
        }
    }
}