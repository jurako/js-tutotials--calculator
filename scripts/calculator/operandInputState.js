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

    getResult() {
        console.log('Get result operandInputState!');
    }
}