const ClientModel = require("../models/Client");
const CpfAlreadyUseError = require("../helpers/errors/CpfAlreadyUseError")
const NonexistentCpfError = require("../helpers/errors/NonexistentCpfError");

class ClientController {

  static async create(req, res) {
    const { name, cpf, birthday } = req.body

    if (await ClientModel.findByCpf(cpf))
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

    if (!response)
      throw new NonexistentCpfError()

    res.status(200).json(response)
  }

  static async index(req, res) {
    const { page = 1, perPage = 1 } = req.query

    const response = await ClientModel.listClients({ page, perPage })

    res.status(200).json(response)
  }

}

module.exports = ClientController