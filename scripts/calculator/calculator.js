import { TokenHandler } from '../calculatorTokenHandler.js'

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
    }

    setCalculatorState() {

    }
}