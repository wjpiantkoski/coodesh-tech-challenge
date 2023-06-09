import TransactionType, {TransactionNature} from "../entities/transaction-type";
import TransactionTypeModel from "../../../infra/transaction/sequelize/models/transaction-type.model";
import TransactionTypeService from "./transaction-type.service";
import {Sequelize} from "sequelize-typescript";

describe('TransactionTypeService', () => {

    let sequelize: Sequelize

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ":memory:",
            logging: false,
            sync: {force: true}
        })

        sequelize.addModels([TransactionTypeModel])

        await sequelize.sync()
    })

    afterEach(async () => {
        await sequelize.close()
    })

    it('should populate transaction type', async () => {
        await TransactionTypeService.populateTransactionTypes()

        const foundTransactionTypes = await TransactionTypeModel.findAll()

        expect(foundTransactionTypes[0].id).toBe('1')
        expect(foundTransactionTypes[1].id).toBe('2')
        expect(foundTransactionTypes[2].id).toBe('3')
        expect(foundTransactionTypes[3].id).toBe('4')
    })

});