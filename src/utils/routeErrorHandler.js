const { validationResult } = require("express-validator")
const ParamError = require("../helpers/errors/ParamError")

const routeErrorHandler = (req, res, next) => {
    const validationErrors = validationResult(req).array()

    if(!!!validationErrors.length) return next()

    throw new ParamError(validationErrors.map(({ param, msg }) => ({ param, message: msg })))
}

module.exports = { routeErrorHandler }