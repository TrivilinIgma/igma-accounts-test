class ParamError extends Error {
    constructor(errorData) {
        super();
        this.status = 400;
        this.message = "Houveram um ou mais erros nos dados enviados nesta requisição."
        this.data = errorData
    }
}

module.exports = ParamError;