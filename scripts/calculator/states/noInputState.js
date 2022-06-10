export class noInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        this.calculator.currentToken = value;
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());
    }

    inputDecimal(value) {
        this.calculator.currentToken = value;
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());
    }

    inputOperator(value) {
        if (value == '-') {
            this.calculator.setCalculatorState(this.calculator.getUnaryOperatorInputState());
        } else {
            this.calculator.storeCurrentToken();
            this.calculator.setCalculatorState(this.calculator.getOperatorInputState());
        }

        this.calculator.currentToken = value;
    }

    evaluate() {
        //do nothing
    }

    clear() {
        this.calculator.resetTokens();
        this.calculator.setCalculatorState(this.calculator.getNoInputState());
    }
}