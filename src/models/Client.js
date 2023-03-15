const PrismaError = require("../helpers/errors/PrismaError");
const prisma = require("../lib/prisma");
const prismaPageCalculation = require("../utils/prismaPageCalculation");

class ClientModel {

    static async create({ name = nil, cpf = nil, birthday = nil }) {
        try {
            return await prisma.client.create({
                data: { name, cpf, birthday },
            })
        } catch (error) {
            throw new PrismaError({ message: error })
        }
    }

    static async findByCpf(cpf) {
        try {
            return await prisma.client.findUnique({
                where: { cpf }
            })
        } catch (error) {
            throw new PrismaError({ message: error })
        }
    }

    static async listClients({ page, perPage }) {
        try {
            console.log("prismaPageCalculation({ page, perPage })")
            console.log("prismaPageCalculation({ page, perPage })")
            console.log("prismaPageCalculation({ page, perPage })")
            console.log("prismaPageCalculation({ page, perPage })")
            console.log(prismaPageCalculation({ page, perPage }))
            return await prisma.client.findMany(prismaPageCalculation({ page, perPage }))
        } catch (error) {
            throw new PrismaError({ message: error })
        }
    }

}

module.exports = ClientModel