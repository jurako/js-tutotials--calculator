export class noInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber() {
        console.log('Input number noInputState!');
    }

    inputDecimal() {
        console.log('Input decimal noInputState!');
    }

    inputOperator() {
        console.log('Input operator noInputState!');
    }

    evaluate() {
        console.log('Evaluate noInputState!');
    }

    clear() {
        console.log('Clear noInputState!');
    }
}