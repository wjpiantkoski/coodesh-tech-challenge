import App from "./infra/http/express";
import {SERVER_PORT, NODE_PATH} from "./env";
import Database from "./infra/@shared/database/database";
import FileTransactionService from "./domain/file/services/file-transaction.service";
import TransactionTypeService from "./domain/transaction/services/transaction-type.service";

class Server {
    private app

    constructor() {
        this.app = new App().app
    }

    public async run(): Promise<void> {
        const database = new Database()

        await database.connect()
        console.log(`database connected`)

        await FileTransactionService.createUploadFileFolder(NODE_PATH)
        await TransactionTypeService.populateTransactionTypes()

        const server = this.app.listen(SERVER_PORT)
        console.log(`server running at ${SERVER_PORT}`)

        process.on('SIGINT', async () => {
            await database.disconnect()
            server.close()
        })
    }
}

new Server().run()