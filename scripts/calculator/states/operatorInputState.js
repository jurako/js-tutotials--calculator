export class operatorInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number operatorInputState!');

        this.calculator.storeCurrentToken();
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());

        this.calculator.currentToken = value;
    }

    inputDecimal(value) {
        console.log('Input decimal operatorInputState!');

        this.calculator.storeCurrentToken();
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());

        this.calculator.currentToken = value;
    }

    inputOperator(value) {
        console.log('Input operator operatorInputState!');

        if (this.calculator.currentToken != value) {
            
            if ((this.calculator.currentToken == '*' || this.calculator.currentToken == '/') && value == '-') {
                this.calculator.storeCurrentToken();
                this.calculator.setCalculatorState(this.calculator.getUnaryOperatorInputState());
            }

            this.calculator.currentToken = value;
        }
    }

    evaluate() {
        console.log('Evaluate operatorInputState!');

        //call math parser
        this.calculator.setCalculatorState(this.calculator.getShowResultState());
    }

    clear() {
        console.log('Clear operatorInputState!');

        this.calculator.resetTokens();
        this.calculator.setCalculatorState(this.calculator.getNoInputState());
    }
}