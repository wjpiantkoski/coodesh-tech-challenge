import RepositoryInterface from "../../@shared/repository/repository.interface";
import TransactionType from "../entities/transaction-type";

export default interface TransactionTypeRepository extends RepositoryInterface<TransactionType> {

    findByNumber(typeNumber: string): Promise<TransactionType>

}