const { check } = require('express-validator');

const buildValidator = ({
    param = null,
    rulesForValidate = [],
    tractiveRules = []
}) => {

    const treatedParameter = check(param)

    if (!!tractiveRules.length)
        tractiveRules.forEach((rule) => treatedParameter[rule]())

    if (!!rulesForValidate.length)
        rulesForValidate.forEach(({ rule, message, ruleParam = null }) => {
            const mainRule = ruleParam ? treatedParameter[rule](ruleParam) : treatedParameter[rule]()

            mainRule.withMessage(message).bail()
        })

    return treatedParameter
}

module.exports = buildValidator