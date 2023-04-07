export default class NotFoundEntityError extends Error {
    constructor(entityName: string) {
        super(`${entityName} not found`);
        this.name = 'NotFoundEntityError'
    }
}