import { noInputState } from './states/noInputState.js';
import { operandInputState } from './states/operandInputState.js';
import { operatorInputState } from './states/operatorInputState.js';
import { unaryOperatorInputState } from './states/unaryOperatorInputState.js';
import { showResultState } from './states/showResultState.js';

import { InputService } from './services/inputService.js';
import { MathParser } from './mathParser/main.js';

export class Calculator {

    constructor(newCalculator) {
        this.noInputState = new noInputState(this);
        this.operandInputState = new operandInputState(this);
        this.operatorInputState = new operatorInputState(this);
        this.unaryOperatorInputState = new unaryOperatorInputState(this);
        this.showResultState = new showResultState(this);

        this.calculatorState = this.noInputState;

        this.mathParser = new MathParser();

        this.currentToken = '0';
        this.tokens = [];

        this.init(newCalculator);
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

    init(newCalculator) {
        newCalculator.addEventListener('click', function(event) { InputService.handleInputAndUpdateDisplay(event); });
    }
}