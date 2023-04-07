export default interface RepositoryInterface<T> {

    createMany(entities: T[]): Promise<void>

}