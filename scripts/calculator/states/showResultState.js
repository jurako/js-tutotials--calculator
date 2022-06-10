export class showResultState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber(value) {
        console.log('Input number showResultState!');

        this.calculator.currentToken = value;
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());
    }

    inputDecimal(value) {
        console.log('Input decimal showResultState!');

        this.calculator.currentToken = value;
        this.calculator.setCalculatorState(this.calculator.getOperandInputState());
    }

    inputOperator(value) {
        console.log('Input operator showResultState!');
        console.log('test1: ' + this.calculator.currentToken);
        console.log('test2: ' + this.calculator.tokens);
        console.log('================================');

        this.calculator.storeCurrentToken();
        console.log('test3: ' + this.calculator.currentToken);
        console.log('test4: ' + this.calculator.tokens);
        this.calculator.currentToken = value;
        this.calculator.setCalculatorState(this.calculator.getOperatorInputState());

    }

    evaluate() {
        console.log('Evaluate showResultState!');

        //do nothing
    }

    clear() {
        console.log('Clear showResultState!');

        this.calculator.resetTokens();
        this.calculator.setCalculatorState(this.calculator.getNoInputState());
    }
}