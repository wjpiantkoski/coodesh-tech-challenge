import {Sequelize} from "sequelize-typescript";
import TransactionTypeModel from "../models/transaction-type.model";
import TransactionModel from "../models/transaction.model";
import TransactionType, {TransactionNature} from "../../../../domain/transaction/entities/transaction-type";
import TransactionTypeRepository from "./transaction-type.repository";
import Transaction from "../../../../domain/transaction/entities/transaction";
import TransactionRepository from "./transaction.repository";

describe('TransactionRepository', () => {

    let sequelize: Sequelize
    let transactionType: TransactionType

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ":memory:",
            logging: false,
            sync: {force: true}
        })

        sequelize.addModels([
            TransactionTypeModel,
            TransactionModel
        ])

        await sequelize.sync()

        transactionType = new TransactionType('1', TransactionNature.CashIn, 'Venda produtor')
        const transactionTypeRepository = new TransactionTypeRepository()
        await transactionTypeRepository.createMany([transactionType])
    })

    afterEach(async () => {
        await sequelize.close()
    })

    it('should create many transactions', async () => {
        const transactionOne = new Transaction({
            date: new Date(),
            product: 'Curso Online',
            seller: 'Test Seller',
            type: transactionType,
            value: 100000
        })

        const transactionTwo = new Transaction({
            date: new Date(),
            product: 'Curso Online Avançado',
            seller: 'Test Best Seller',
            type: transactionType,
            value: 100000
        })

        const transactions = [transactionOne, transactionTwo]
        const transactionRepository = new TransactionRepository()

        await transactionRepository.createMany(transactions)

        const [
            foundTransactionOne,
            foundTransactionTwo
        ] = await Promise.all([
            TransactionModel.findOne({
                where: { id: transactionOne._id.id },
                include: [
                    {
                        model: TransactionTypeModel,
                        required: true
                    }
                ]
            }),
            TransactionModel.findOne({
                where: { id: transactionTwo._id.id },
                include: [
                    {
                        model: TransactionTypeModel,
                        required: true
                    }
                ]
            }),
        ])

        expect(foundTransactionOne.toJSON()).toStrictEqual({
            id: transactionOne._id.id,
            date: transactionOne.date,
            product: transactionOne.product,
            seller: transactionOne.seller,
            value: transactionOne.value,
            type_id: transactionOne.type._id,
            type: {
                id: transactionOne.type._id,
                nature: transactionOne.type.nature,
                description: transactionOne.type.description,
            }
        })

        expect(foundTransactionTwo.toJSON()).toStrictEqual({
            id: transactionTwo._id.id,
            date: transactionTwo.date,
            product: transactionTwo.product,
            seller: transactionTwo.seller,
            value: transactionTwo.value,
            type_id: transactionTwo.type._id,
            type: {
                id: transactionTwo.type._id,
                nature: transactionTwo.type.nature,
                description: transactionTwo.type.description,
            }
        })
    })

});