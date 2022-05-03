import { TokenHandler } from '../calculatorTokenHandler.js'

import { noInputState } from './noInputState.js';
import { operandInputState } from './operandInputState.js';
import { operatorInputState } from './operatorInputState.js';
import { showResultState } from './showResultState.js';

const SELECTOR_CALCULATOR = '.calculator';
const SELECTOR_DISPLAY = '.calculator__display';

const SELECTOR_ADD = '.calculator__button.add';
const SELECTOR_SUB = '.calculator__button.sub';
const SELECTOR_MUL = '.calculator__button.mul';
const SELECTOR_DIV = '.calculator__button.div';
const SELECTOR_CLEAR = '.calculator__clear';
const SELECTOR_EQUALS = '.calculator__eq';
const SELECTOR_NUMBER = '.calculator__button';
const SELECTOR_DECIMAL_POINT = '.calculator__dec-point';

//button roles
const CLEAR = 'clear';
const NUMBER = 'number';
const DECIMAL = 'dec';
const OPERATOR = 'operator';
const CALCULATE = 'eq';



const OPERATOR_CLASSES = ['add', 'sub', 'mul', 'div'];

export class Calculator {

    constructor() {
        this.currentState = 'noInput'




        this.tokenHandler = new TokenHandler();
        //math parser

        this._addEventListeners();
    }

    handle(button) {
        //parse
        //display
    }

    _addEventListeners() {
        document.querySelector(SELECTOR_CALCULATOR).addEventListener('click', function (event) {
            alert('test');

            const button = event.target.dataset.role;

            if (button) {
                this.handle(button);
            }

        }.bind(this));
    }
}

const calculator = new Calculator();