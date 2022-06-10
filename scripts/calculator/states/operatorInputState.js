export class operatorInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        this.calculator.storeCurrentToken();
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());

        this.calculator.currentToken = value;
    }

    inputDecimal(value) {
        this.calculator.storeCurrentToken();
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());

        this.calculator.currentToken = value;
    }

    inputOperator(value) {
        if (this.calculator.currentToken != value) {

            if ((this.calculator.currentToken == '*' || this.calculator.currentToken == '/') && value == '-') {
                this.calculator.storeCurrentToken();
                this.calculator.setCalculatorState(this.calculator.getUnaryOperatorInputState());
            }

            this.calculator.currentToken = value;
        }
    }

    evaluate() {
        //do nothing
    }

    clear() {
        this.calculator.resetTokens();
        this.calculator.setCalculatorState(this.calculator.getNoInputState());
    }
}