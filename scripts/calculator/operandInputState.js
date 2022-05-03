export class operandInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber() {
        console.log('Input number operandInputState!');
    }

    inputDecimal() {
        console.log('Input decimal operandInputState!');
    }

    inputOperator() {
        console.log('Input operator operandInputState!');
    }

    evaluate() {
        console.log('Evaluate operandInputState!');
    }

    clear() {
        console.log('Clear operandInputState!');
    }
}