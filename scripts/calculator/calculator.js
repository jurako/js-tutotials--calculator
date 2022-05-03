import { noInputState } from './noInputState.js';
import { operandInputState } from './operandInputState.js';
import { operatorInputState } from './operatorInputState.js';
import { showResultState } from './showResultState.js';

export class Calculator {

    constructor() {
        this.noInputState = new noInputState(this);
        this.operandInputState = new operandInputState(this);
        this.operatorInputState = new operatorInputState(this);
        this.showResultState = new showResultState(this);

        this.calculatorState = this.noInputState;

        this.currentToken = '0';
        this.tokens = [];
    }

    inputNumber(value) {
        this.calculatorState.inputNumber(value);
    }

    inputDecimal(value) {
        this.calculatorState.inputDecimal(value);
    }

    inputOperator(value) {
        this.calculatorState.inputOperator(value);
    }

    evaluate(value) {
        this.calculatorState.evaluate(value);
    }


    setCalculatorState(newCalculatorState) {
        this.calculatorState = newCalculatorState;
    }

    getNoInputState() {
        return this.noInputState;
    }
    getOperandInputState() {
        return this.operandInputState;
    }
    getOperatorInputState() {
        return this.operatorInputState;
    }
    getShowResultState() {
        return this.showResultState;
    }
}