export class unaryOperatorInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number unaryOperatorInputState!');
    }

    inputDecimal(value) {
        console.log('Input decimal unaryOperatorInputState!');
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