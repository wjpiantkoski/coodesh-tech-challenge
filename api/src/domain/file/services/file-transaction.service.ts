import FileTransaction from "../entities/file-transaction";
import * as fs from "fs";

export default class FileTransactionService {

    static async createUploadFileFolder(filePath: string): Promise<void> {
        const folderExists = await fs.existsSync(filePath)

        if (!folderExists) {
            await fs.mkdirSync(filePath)
        }
    }

    static async readFileTransactions(filePath: string): Promise<any> {
        const file = await fs.readFileSync(filePath, { encoding: 'utf8' })
        const fileLines = file.split('\n')
        const fileTransactions = []
        const linesWithError = []

        for (let i = 0; i < fileLines.length; i++) {
            const line = fileLines[i]

            try {
                const type = line[0]
                const date = line.slice(1, 26)
                const product = line.slice(26, 56)
                const value = line.slice(56, 66)
                const seller = line.slice(66, line.length)

                const fileTransaction = new FileTransaction(type, date, product, value, seller)

                fileTransactions.push(fileTransaction)
            } catch (err) {
                linesWithError.push(i+1)
            }
        }

        return {
            fileTransactions,
            linesWithError
        }
    }

}