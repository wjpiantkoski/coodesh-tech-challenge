import cors from 'cors'
import helmet from 'helmet'
import express from 'express'
import compression from 'compression'

import FilesRouter from "./routes/files.router";
import TransactionsRouter from "./routes/transactions.router";

export default class App {
    public app
    public filesRouter
    public transactionsRouter

    constructor() {
        this.app = express()
        this.filesRouter = new FilesRouter().router
        this.transactionsRouter = new TransactionsRouter().router

        this.middlewares()
        this.routes()
    }

    private routes(): void {
        this.app.use('/files', this.filesRouter)
        this.app.use('/transactions', this.transactionsRouter)
    }

    private middlewares(): void {
        this.app.use(helmet())
        this.app.disable('x-powered-by')

        this.app.use(cors({
            origin: '*',
            methods: 'GET,PUT,POST,DELETE'
        }))

        this.app.use(compression())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
    }
}