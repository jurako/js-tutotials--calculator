import { noInputState } from './noInputState.js';
import { operandInputState } from './operandInputState.js';
import { operatorInputState } from './operatorInputState.js';
import { unaryOperatorInputState } from './unaryOperatorInputState.js';
import { showResultState } from './showResultState.js';

export class Calculator {

    constructor() {
        this.noInputState = new noInputState(this);
        this.operandInputState = new operandInputState(this);
        this.operatorInputState = new operatorInputState(this);
        this.unaryOperatorInputState = new unaryOperatorInputState(this);
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

    evaluate() {
        this.calculatorState.evaluate();
    }

    clear() {
        this.calculatorState.clear();
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
    getUnaryOperatorInputState() {
        return this.unaryOperatorInputState;
    }
    getShowResultState() {
        return this.showResultState;
    }


    storeCurrentToken() {
        this.tokens.push(this.currentToken);
    }

    resetTokens() {
        this.tokens = [];
        this.currentToken = '0';
    }
}