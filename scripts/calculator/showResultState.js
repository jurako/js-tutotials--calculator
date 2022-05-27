export class showResultState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number showResultState!');

        this.calculator.currentToken = value;
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());
    }

    inputDecimal(value) {
        console.log('Input decimal showResultState!');

        this.calculator.currentToken = value;
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());
    }

    inputOperator(value) {
        console.log('Input operator showResultState!');

        this.calculator.currentToken = value;
        this.calculator.storeCurrentToken();
        this.calculator.setCalculatorState(this.calculator.getOperatorInputState());

    }

    evaluate() {
        console.log('Evaluate showResultState!');
    }

    clear() {
        console.log('Clear showResultState!');
    }
}