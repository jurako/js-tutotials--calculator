export class operatorInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number operatorInputState!');
    }

    inputDecimal(value) {
        console.log('Input decimal operatorInputState!');
    }

    inputOperator(value) {
        console.log('Input operator operatorInputState!');
    }

    evaluate() {
        console.log('Evaluate operatorInputState!');
    }

    clear() {
        console.log('Clear operatorInputState!');
    }
}