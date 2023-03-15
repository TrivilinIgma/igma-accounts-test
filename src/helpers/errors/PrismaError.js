class PrismaError extends Error {
    constructor({ message = "Houve um erro durante na requisição para o banco de dados." }) {
        super();
        this.status = 400;
        this.message = message
    }
}

module.exports = PrismaError;