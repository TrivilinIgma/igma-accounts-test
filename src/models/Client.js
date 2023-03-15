const NonexistentCpfError = require("../helpers/errors/NonexistentCpfError");
const PrismaError = require("../helpers/errors/PrismaError");
const prisma = require("../lib/prisma");

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
            const response = await prisma.client.findUnique({
                where: { cpf }
            })

            if (!response)
                throw new NonexistentCpfError()

            return response
        } catch (error) {
            throw new PrismaError({ message: error })
        }
    }

}

module.exports = ClientModel