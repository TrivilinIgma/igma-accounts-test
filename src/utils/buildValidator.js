const { body } = require('express-validator');

const buildValidator = ({
    param = "",
    rulesForValidate = [],
    tractiveRules = []
}) => {

    const bodyParam = body(param)

    if (!!tractiveRules.length)
        tractiveRules.forEach((rule) => bodyParam[rule]())

    if (!!rulesForValidate.length)
        rulesForValidate.forEach(({ rule, message, ruleParam = null }) => {
            const mainRule = ruleParam ? bodyParam[rule](ruleParam) : bodyParam[rule]()

            mainRule.withMessage(message).bail()
        })

    return bodyParam
}

module.exports = buildValidator