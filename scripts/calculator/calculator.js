import { operandInputState } from './states/operandInputState.js';
import { operatorInputState } from './states/operatorInputState.js';
import { unaryOperatorInputState } from './states/unaryOperatorInputState.js';
import { showResultState } from './states/showResultState.js';

import { InputService } from './services/inputService.js';
import { DisplayService } from "./services/displayService.js";
import { MathParser } from './mathParser/main.js';

export class Calculator {

    constructor(newCalculator) {
        this.init(newCalculator);
        this.domElement = newCalculator;

        this.showResultState = new showResultState(this);
        this.operandInputState = new operandInputState(this);
        this.operatorInputState = new operatorInputState(this);
        this.unaryOperatorInputState = new unaryOperatorInputState(this);

        this.calculatorState = this.showResultState;

        this.inputService = new InputService(this);
        this.displayService = new DisplayService(this);
        this.mathParser = new MathParser();

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

    getShowResultState() {
        return this.showResultState;
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


    storeCurrentToken() {
        if (this.currentToken.length) {
            this.tokens.push(this.currentToken);
        }
    }

    resetTokens() {
        this.tokens = [];
        this.currentToken = '0';
    }

    init(newCalculator) {
        newCalculator.addEventListener('click', function (event) {

            this.inputService.handleInput(event);
            this.displayService.update();

        }.bind(this));
    }
}