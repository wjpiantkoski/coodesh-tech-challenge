import {Sequelize} from "sequelize-typescript";
import TransactionTypeModel from "../models/transaction-type.model";
import TransactionType, {TransactionNature} from "../../../../domain/transaction/entities/transaction-type";
import TransactionTypeRepository from "./transaction-type.repository";

describe('TransactionTypeRepository', () => {

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

    it('should create many transaction types', async () => {
        const transactionTypeOne = new TransactionType('1', TransactionNature.CashIn, 'Venda produtor')
        const transactionTypeTwo = new TransactionType('2', TransactionNature.CashIn, 'Venda afiliado')
        const transactionTypes = [transactionTypeOne, transactionTypeTwo]

        const transactionTypeRepository = new TransactionTypeRepository()

        await transactionTypeRepository.createMany(transactionTypes)

        const [
            transactionTypeModelOne,
            transactionTypeModelTwo
        ] = await Promise.all([
            TransactionTypeModel.findOne({ where: { id: '1' } }),
            TransactionTypeModel.findOne({ where: { id: '2' } }),
        ])

        expect(transactionTypeModelOne.toJSON()).toStrictEqual({
            id: transactionTypeOne._id,
            nature: transactionTypeOne.nature,
            description: transactionTypeOne.description
        })

        expect(transactionTypeModelTwo.toJSON()).toStrictEqual({
            id: transactionTypeTwo._id,
            nature: transactionTypeTwo.nature,
            description: transactionTypeTwo.description
        })
    })

    it('should find a transaction type by id', async () => {
        const transactionType = new TransactionType('1', TransactionNature.CashIn, 'Venda produtor')

        await TransactionTypeModel.create({
            id: transactionType._id,
            nature: transactionType.nature,
            description: transactionType.description
        })

        const transactionTypeRepository = new TransactionTypeRepository()

        const foundTransactionType = await transactionTypeRepository.findById(transactionType._id)

        expect(foundTransactionType).toEqual(transactionType)
    })
})