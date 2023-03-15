function cpfValidator(cpf = "") {

    if (checkAllNumbersAreEqual()) return false;
    if (!checkIfFirstValidatorDigitIsValid({ firstValidatorDigit: calculateFirstValidatorDigit(cpf), cpf })) return false
    if (!checkIfSecondValidatorDigitIsValid({ secondValidatorDigit: calculateSecondValidatorDigit(cpf), cpf })) return false

    return true;
}

const checkAllNumbersAreEqual = (cpf = "") => /^(\d)\1+$/.test(cpf);

const calculateFirstValidatorDigit = (cpf = "") => {
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }

    const rest = 11 - (sum % 11);
    const firstValidatorDigit = rest === 10 || rest === 11 ? 0 : rest;

    return firstValidatorDigit
}

const checkIfFirstValidatorDigitIsValid = ({ firstValidatorDigit = "", cpf = "" }) => firstValidatorDigit === parseInt(cpf.charAt(9))

const calculateSecondValidatorDigit = (cpf = "") => {
    let sum = 0;
    
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    
    const rest = 11 - (sum % 11);
    const secondValidatorDigit = rest === 10 || rest === 11 ? 0 : rest;
    
    return secondValidatorDigit
}

const checkIfSecondValidatorDigitIsValid = ({ secondValidatorDigit = "", cpf = "" }) => secondValidatorDigit === parseInt(cpf.charAt(10))

module.exports = { cpfValidator }