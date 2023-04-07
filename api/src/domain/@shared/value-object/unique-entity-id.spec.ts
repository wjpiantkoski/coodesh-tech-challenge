import UniqueEntityId from "./unique-entity-id";
import InvalidUuidError from "../errors/invalid-uuid.error";

describe('UniqueEntityId', function () {

    it('should throw an error when id is invalid', () => {
        expect(() => {
            new UniqueEntityId('123')
        }).toThrowError(InvalidUuidError)
    })

});