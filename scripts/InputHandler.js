import { Calculator } from "./calculator/calculator.js";

const SELECTOR_CALCULATOR = '.calculator';

export class InputHandler {
    constructor() {

        this.calculator = new Calculator();
        this.map = {
            'num': 'inputNumber',
            'dec': 'inputDecimal',
            'op': 'inputOperator',
            'eq': 'evaluate',
            'clr': 'clear',
        }

        this._addEventListeners();

    }

    _addEventListeners() {
        document.querySelector(SELECTOR_CALCULATOR).addEventListener('click', this.handle.bind(this));
    }

    handle(event) {
        let target = event.target.dataset;
        if (this.isValidInput(target.value)) {
            this.dispatch(target.key, target.value);
        }
    }

    dispatch(key, value) {
        if (this.calculatorHas(key)) {
            let method = this.map[key];
            this.calculator[method](value);
        }
    }

    calculatorHas(key) {
        return this.map[key] !== undefined;
    }

    isValidInput(value) {
        return /[0-9+\-*\/=.C]/.test(value);
    }

}