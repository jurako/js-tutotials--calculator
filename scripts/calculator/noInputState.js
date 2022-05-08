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

        if (value == '-') {
            this.calculator.setCalculatorState(this.calculator.getUnaryOperatorInputState());
        } else {
            this.calculator.setCalculatorState(this.calculator.getOperatorInputState());
            this.calculator.storeCurrentToken();
        }

        this.calculator.currentToken = value;


        console.log('Input operator noInputState!');
    }

    evaluate() {
        console.log('Evaluate noInputState!');
    }

    clear() {
        console.log('Clear noInputState!');
    }
}