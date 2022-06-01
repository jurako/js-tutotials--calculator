export class noInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number noInputState!');

        this.calculator.currentToken = value;
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());
    }

    inputDecimal(value) {
        console.log('Input decimal noInputState!');

        this.calculator.currentToken = value;
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());
    }

    inputOperator(value) {
        console.log('Input operator noInputState!');

        if (value == '-') {
            this.calculator.setCalculatorState(this.calculator.getUnaryOperatorInputState());
        } else {
            this.calculator.storeCurrentToken();
            this.calculator.setCalculatorState(this.calculator.getOperatorInputState());
        }

        this.calculator.currentToken = value;
    }

    evaluate() {
        console.log('Evaluate noInputState!');

        //do nothing
    }

    clear() {
        console.log('Clear noInputState!');

        this.calculator.resetTokens();
        this.calculator.setCalculatorState(this.calculator.getNoInputState());
    }
}