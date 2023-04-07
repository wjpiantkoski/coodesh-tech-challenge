export default class InvalidUuidError extends Error {

    constructor() {
        super(`ID is an invalid UUID`);
        this.name = 'InvalidUuidError'
    }

}