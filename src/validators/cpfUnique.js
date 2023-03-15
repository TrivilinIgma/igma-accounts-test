const ClientModel = require("../models/Client")

const cpfUnique = (cpf) => ClientModel.findByCpf(cpf)
    .then((record) => record
        ? Promise.reject(false)
        : Promise.resolve(true)
    )

module.exports = { cpfUnique }