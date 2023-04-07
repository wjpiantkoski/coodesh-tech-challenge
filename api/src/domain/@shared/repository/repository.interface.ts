export default interface RepositoryInterface<T> {

    createMany(entity: T): Promise<void>

}