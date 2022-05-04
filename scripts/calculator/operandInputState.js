export class operandInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number operandInputState!');
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
    }
}