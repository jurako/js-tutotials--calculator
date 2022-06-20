export class showResultState {

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
        let noInput = this.calculator.tokens.length == 0 &&
            this.calculator.currentToken == '0';

        if (value == '-' && noInput) {
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
        this.calculator.setCalculatorState(this.calculator.getShowResultState());
    }
}