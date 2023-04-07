import RepositoryInterface from "../../@shared/repository/repository.interface";
import TransactionType from "../entities/transaction-type";

export default interface TransactionTypeRepositoryInterface extends RepositoryInterface<TransactionType> {

    findByNumber(typeNumber: string): Promise<TransactionType>

}