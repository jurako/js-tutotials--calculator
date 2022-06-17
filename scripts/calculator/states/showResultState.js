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
        this.calculator.storeCurrentToken();
        this.calculator.currentToken = value;
        this.calculator.setCalculatorState(this.calculator.getOperatorInputState());
    }

    evaluate() {
        //do nothing
    }

    clear() {
        this.calculator.resetTokens();
        this.calculator.setCalculatorState(this.calculator.getNoInputState());
    }
}