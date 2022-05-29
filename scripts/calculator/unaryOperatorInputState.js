export class unaryOperatorInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number unaryOperatorInputState!');

        this.calculator.currentToken += value;
    }

    inputDecimal(value) {
        console.log('Input decimal unaryOperatorInputState!');

        if (this.calculator.currentToken.indexOf('.') == -1) {
            this.calculator.currentToken += value;
        }
    }

    inputOperator(value) {
        console.log('Input operator unaryOperatorInputState!');
    }

    evaluate() {
        console.log('Evaluate unaryOperatorInputState!');
    }

    clear() {
        console.log('Clear unaryOperatorInputState!');
    }
}