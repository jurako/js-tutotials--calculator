export class operandInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number operandInputState!');

        this.calculator.currentToken += value;
    }

    inputDecimal(value) {
        console.log('Input decimal operandInputState!');
    }

    inputOperator(value) {
        console.log('Input operator operandInputState!');
    }

    evaluate() {
        console.log('Evaluate operandInputState!');
    }

    clear() {
        console.log('Clear operandInputState!');

        this.calculator.resetTokens();
        this.calculator.setCalculatorState(this.calculator.getNoInputState());
    }
}