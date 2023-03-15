class NotFoundError extends Error {
    constructor() {
        super();
        this.status = 404;
        this.message = "Este recurso não existe."
    }
}

module.exports = NotFoundError;