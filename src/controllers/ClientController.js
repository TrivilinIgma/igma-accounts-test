const ClientModel = require("../models/Client");

class ClientController {

  static async createClient(req, res, next) {
    const { name, cpf, birthday } = req.body

    const response = await ClientModel.create({
      name,
      cpf,
      birthday: new Date(birthday)
    });

    response instanceof Error
      ? next(response)
      : res.status(200).json(response)

  }

}

module.exports = ClientController