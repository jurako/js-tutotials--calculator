function isOperand(token) {
    return !isNaN(token);
}

function isOperator(token) {
    return /[+\-*/]/.test(token);
}

export { isOperand, isOperator };