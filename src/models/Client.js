const prisma = require("../lib/prisma");

class ClientModel {

    static async create({ name = nil, cpf = nil, birthday = nil }) {
        try {
            return await prisma.client.create({
                data: { name, cpf, birthday },
            })
        } catch (error) {
            return new Error(error)
        }
    }

    // FAZER FIND BY CPF PARA DUAS COISAS
    // - VALIDAR SE O CPF EXISTE ANTES DE CADASTRAR O USUARIO
    // - ROTA DE PROCURAR POR CPF
    static async findByCpf(cpf) {
        try {
            return await prisma.client.findUnique({
                where: { cpf }
            })
        } catch (error) {
            return new Error(error)
        }
    }

}

module.exports = ClientModel