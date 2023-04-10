import RepositoryInterface from "../../@shared/repository/repository.interface";
import Transaction from "../entities/transaction";

export default interface TransactionRepositoryInterface extends RepositoryInterface<Transaction> {

    findAll(): Promise<Transaction[]>

}