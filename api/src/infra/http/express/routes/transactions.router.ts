import {Request, Response, Router} from 'express'
import TransactionRepository from "../../../transaction/sequelize/repository/transaction.repository";
import ListGroupedTransactionsUseCase from "../../../../application/list-grouped-transactions.use-case";

export default class TransactionsRouter {

    public router = Router()

    constructor() {
        this.routes()
    }

    private routes(): void {
        this.router.get(
            '/',
            async (req: Request, res: Response) => {

                const listGroupedTransactionsUseCase = new ListGroupedTransactionsUseCase(
                    new TransactionRepository()
                )

                const transactions = await listGroupedTransactionsUseCase.execute()

                res.json(transactions)
            }
        )
    }

}