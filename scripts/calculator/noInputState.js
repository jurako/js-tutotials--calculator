export class noInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number noInputState!');
    }

    inputDecimal(value) {
        console.log('Input decimal noInputState!');
    }

    inputOperator(value) {
        console.log('Input operator noInputState!');
    }

    evaluate() {
        console.log('Evaluate noInputState!');
    }

    clear() {
        console.log('Clear noInputState!');
    }
}