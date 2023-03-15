class ParamError extends Error {
    constructor(errorData) {
        super();
        this.status = 400;
        this.message = "Houveram um ou mais erros nos dados enviados nesta requisição."
        this.errorData = errorData
    }
}

module.exports = ParamError;