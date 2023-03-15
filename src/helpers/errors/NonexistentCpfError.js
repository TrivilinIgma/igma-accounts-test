class NonexistentCpfError extends Error {
    constructor() {
        super();
        this.status = 400;
        this.message = "Não existe nenhum usuário cadastrado com este CPF."
    }
}

module.exports = NonexistentCpfError;