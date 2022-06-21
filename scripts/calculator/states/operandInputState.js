export class operandInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        this.calculator.currentToken += value;
    }

    inputDecimal(value) {
        if (this.calculator.currentToken.indexOf('.') == -1) {
            this.calculator.currentToken += value;
        }
    }

    inputOperator(value) {
        this.calculator.storeCurrentToken();
        this.calculator.setCalculatorState(this.calculator.getOperatorInputState());

        this.calculator.currentToken = value;
    }

    evaluate() {
        this.calculator.setCalculatorState(this.calculator.getShowResultState());

        this.calculator.storeCurrentToken();
        let result = this.calculator.mathParser.execute(this.calculator.tokens);
        this.calculator.resetTokens();
        this.calculator.currentToken = result;
    }

    clear() {
        this.calculator.resetTokens();
        this.calculator.setCalculatorState(this.calculator.getShowResultState());
    }
}