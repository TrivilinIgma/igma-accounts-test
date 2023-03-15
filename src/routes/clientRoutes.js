const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController')
const { cpfValidator } = require("../validators/cpfDigits");
const { routeErrorHandler } = require('../utils/routeErrorHandler');
const buildValidator = require('../utils/buildValidator');

router.post('/',
    [
        buildValidator({ param: "name", rulesForValidate: [{ rule: "exists", message: 'O envio do nome é obrigatório' }] }),
        buildValidator({
            param: "birthday",
            tractiveRules: ["trim"],
            rulesForValidate: [
                { rule: "exists", message: "O envio da data de nascimento é obrigatório" },
                { rule: "isDate", message: "Digite uma data de nascimento válida" },
            ]
        }),
        buildValidator({ 
            param: "cpf", 
            rulesForValidate: [
                { rule: "exists", message: "O envio do CPF é obrigatório" },
                { rule: "isNumeric", message: "Apenas números são permitidos" },
                { rule: "isLength", ruleParam: { min: 11, max: 11 }, message: "O CPF deve possuir 11 digitos" },
                { rule: "custom", ruleParam: cpfValidator, message: "O CPF digitado é inválido" },
            ] 
        }),
        routeErrorHandler
    ],
    ClientController.create
)

router.get('/find-by-cpf', [ buildValidator({ param: "cpf", rulesForValidate: [{ rule: "exists", message: "O envio do CPF é obrigatório" }] }), routeErrorHandler ], ClientController.findByCpf)
router.get('/', ClientController.index)

module.exports = router