class CpfAlreadyUseError extends Error {
    constructor() {
        super();
        this.status = 400;
        this.message = "Este CPF já está sendo utilizado por outro cliente."
    }
}

module.exports = CpfAlreadyUseError;