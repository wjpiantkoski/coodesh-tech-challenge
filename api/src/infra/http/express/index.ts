import express from 'express'
import FilesRouter from "./routes/files.router";

export default class App {
    public app
    public filesRouter

    constructor() {
        this.app = express()
        this.filesRouter = new FilesRouter().router

        this.routes()
    }

    private routes(): void {
        this.app.use('/files', this.filesRouter)
    }
}