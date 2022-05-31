import { Calculator } from "./calculator/calculator.js";
import { DisplayHandler } from "./displayHandler.js";

const SELECTOR_CALCULATOR = '.calculator';

export class InputHandler {

    constructor() {
        this.calculator = new Calculator();
        this.displayHandler = new DisplayHandler(this.calculator);
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
        document.querySelector(SELECTOR_CALCULATOR)
            .addEventListener('click', this.handleInputAndUpdateDisplay.bind(this));
    }

    handleInputAndUpdateDisplay(event) {
        this.handleInput(event);
        this.displayHandler.update();
    }

    handleInput(event) {
        let target = event.target.dataset;

        if (this.isValidInput(target.value)) {
            this.dispatch(target);
        }
    }

    dispatch(target) {
        if (this.calculatorHas(target.key)) {
            let method = this.map[target.key];
            this.calculator[method](target.value);
        }
    }

    calculatorHas(key) {
        return this.map[key] !== undefined;
    }

    isValidInput(value) {
        return /[0-9+\-*\/=.C]/.test(value);
    }

}