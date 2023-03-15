const ClientModel = require("../models/Client");
const CpfAlreadyUseError = require("../helpers/errors/CpfAlreadyUseError")

class ClientController {

  static async createClient(req, res) {
    const { name, cpf, birthday } = req.body

    if (ClientModel.findByCpf(cpf))
      throw new CpfAlreadyUseError()

    const response = await ClientModel.create({
      name,
      cpf,
      birthday: new Date(birthday)
    });

    res.status(200).json(response)
  }

  static async findByCpf(req, res) {
    const { cpf = "" } = req.query

    const response = await ClientModel.findByCpf(cpf)

    res.status(200).json(response)
  }

}

module.exports = ClientController