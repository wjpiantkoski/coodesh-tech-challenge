import {Express, Request, Response, Router} from 'express'
import multer from 'multer'
import {NODE_PATH} from "../../../../env";
import ReadFileTransactionsUseCase from "../../../../application/read-file-transactions.use-case";
import TransactionRepository from "../../../transaction/sequelize/repository/transaction.repository";
import * as path from "path";

export default class FilesRouter {

    public router = Router()
    public upload = multer({dest: NODE_PATH})

    constructor() {
        this.routes()
    }

    private routes(): void {
        this.router.post(
            '/upload',
            this.upload.array('files'),
            async (req: Request, res: Response) => {
                const readFileTransactions = new ReadFileTransactionsUseCase(new TransactionRepository())
                const filepath = path.join(NODE_PATH, req.files[0].path)

                await readFileTransactions.execute(filepath)

                res.sendStatus(202)
            }
        )
    }

}