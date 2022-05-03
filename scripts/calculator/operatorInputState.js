export class operatorInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber() {
        console.log('Input number operatorInputState!');
    }

    inputDecimal() {
        console.log('Input decimal operatorInputState!');
    }

    inputOperator() {
        console.log('Input operator operatorInputState!');
    }

    evaluate() {
        console.log('Evaluate operatorInputState!');
    }

    clear() {
        console.log('Clear operatorInputState!');
    }
}