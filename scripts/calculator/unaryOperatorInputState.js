export class unaryOperatorInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number unaryOperatorInputState!');

        this.calculator.currentToken += value;
    }

    inputDecimal(value) {
        console.log('Input decimal unaryOperatorInputState!');

        if (this.calculator.currentToken.indexOf('.') == -1) {
            this.calculator.currentToken += value;
        }
    }

    inputOperator(value) {
        console.log('Input operator unaryOperatorInputState!');

        if(this.calculator.currentToken.length > 1) {
            this.calculator.storeCurrentToken();
            this.calculator.setCalculatorState(this.calculator.getOperatorInputState());
            this.calculator.currentToken = value;
        }
    }

    evaluate() {
        console.log('Evaluate unaryOperatorInputState!');

        if(this.calculator.currentToken.length > 1) {
            //call math parser
            this.calculator.setCalculatorState(this.calculator.getShowResultState());
        }
    }

    clear() {
        console.log('Clear unaryOperatorInputState!');

        this.calculator.resetTokens();
        this.calculator.setCalculatorState(this.calculator.getNoInputState());
    }
}