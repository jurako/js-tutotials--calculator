export class unaryOperatorInputState {

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
        if (this.calculator.currentToken.length > 1) {
            this.calculator.storeCurrentToken();
            this.calculator.setCalculatorState(this.calculator.getOperatorInputState());
            this.calculator.currentToken = value;
        }
    }

    evaluate() {
        if (this.calculator.currentToken.length > 1) {
            this.calculator.storeCurrentToken();
            let result = this.calculator.mathParser.execute(this.calculator.tokens);

            this.calculator.resetTokens();
            this.calculator.currentToken = result;

            this.calculator.setCalculatorState(this.calculator.getShowResultState());
        }
    }

    clear() {
        this.calculator.resetTokens();
        this.calculator.setCalculatorState(this.calculator.getNoInputState());
    }
}