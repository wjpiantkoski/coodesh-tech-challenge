import FileTransaction from "../entities/file-transaction";
import FileTransactionService from "./file-transaction.service";
import * as fs from "fs";
import * as path from "path";

describe('FileTransactionService', function () {
    it('should create upload file folder', async () => {
        const filepath = path.join(__dirname, '/uploads')
        await FileTransactionService.createUploadFileFolder(filepath)

        const folderExists = await fs.existsSync(filepath)
        expect(folderExists).toBe(true)
    })

    it('should read uploaded file transactions', async () => {
        const fileContent = `
12022-01-15T19:20:30-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS
12021-12-03T11:46:02-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
22022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000012750THIAGO OLIVEIRA
32022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000004500THIAGO OLIVEIRA
42022-01-16T14:13:54-03:00CURSO DE BEM-ESTAR            0000004500JOSE CARLOS
12022-01-22T08:59:13-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
12022-02-01T23:35:43-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA
22022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000155000CARLOS BATISTA
22022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000155000CAROLINA MACHADO
22022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000155000CELSO DE MELO
32022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000050000CARLOS BATISTA
32022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000050000CAROLINA MACHADO
32022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000050000CELSO DE MELO
42022-02-03T17:23:37-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
42022-02-03T20:51:59-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
42022-02-04T07:42:12-03:00DESENVOLVEDOR FULL STACK      0000050000ELIANA NOGUEIRA
12022-02-19T05:33:07-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA
12022-03-01T02:09:54-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS
12022-03-03T09:07:35-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA
12022-03-03T13:12:16-03:00DESENVOLVEDOR FULL STACK      0000155000ELIANA NOGUEIRA
12022-03-03T13:12:16-03:00DESENVOLVEDOR FULL STACK      0000155000


        `

        const filepath = path.join(__dirname, '/uploads/sales.txt')
        await fs.writeFileSync(filepath, fileContent.trim(), { encoding: 'utf8' })

        const {
            linesWithError,
            fileTransactions
        } = await FileTransactionService.readFileTransactions(filepath)

        expect(fileTransactions[0]).toBeInstanceOf(FileTransaction)
        expect(linesWithError[0]).toBe(21)

        await fs.unlinkSync(path.join(__dirname, '/uploads/sales.txt'))
    })


    it('should remove file', async () => {
        const filepath = path.join(__dirname, '/uploads/sales.txt')
        await fs.writeFileSync(filepath, '', { encoding: 'utf8' })

        await FileTransactionService.removeFile(filepath)

        const fileExists = await fs.existsSync(filepath)
        expect(fileExists).toBe(false)
    })
});