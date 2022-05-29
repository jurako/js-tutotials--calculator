export class operandInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number operandInputState!');

        this.calculator.currentToken += value;
    }

    inputDecimal(value) {
        console.log('Input decimal operandInputState!');

        if (this.calculator.currentToken.indexOf('.') == -1) {
            this.calculator.currentToken += value;
        }
    }

    inputOperator(value) {
        console.log('Input operator operandInputState!');

        this.calculator.storeCurrentToken();
        this.calculator.setCalculatorState(this.calculator.getOperatorInputState());

        this.calculator.currentToken = value;
    }

    evaluate() {
        console.log('Evaluate operandInputState!');

        //call math parser
        this.calculator.setCalculatorState(this.calculator.getShowResultState());
    }

    clear() {
        console.log('Clear operandInputState!');

        this.calculator.resetTokens();
        this.calculator.setCalculatorState(this.calculator.getNoInputState());
    }
}