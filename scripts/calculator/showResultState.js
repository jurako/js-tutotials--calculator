export class showResultState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number showResultState!');
    }

    inputDecimal(value) {
        console.log('Input decimal showResultState!');
    }

    inputOperator(value) {
        console.log('Input operator showResultState!');
    }

    evaluate() {
        console.log('Evaluate showResultState!');
    }

    clear() {
        console.log('Clear showResultState!');
    }
}