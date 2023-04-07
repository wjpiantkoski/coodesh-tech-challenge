import express from 'express'
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

        this.routes()
    }

    private routes(): void {
        this.app.use('/files', this.filesRouter)
        this.app.use('/transactions', this.transactionsRouter)
    }
}