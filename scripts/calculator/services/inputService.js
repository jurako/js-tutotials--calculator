import { Calculator } from "./../calculator.js";
import { DisplayService } from "./displayService.js";

export class InputService {

    constructor() {
        console.log('Calculator');
        console.log(Calculator);
        this.calculator = new Calculator();
        this.displayService = new DisplayService(this.calculator);
        this.map = {
            'num': 'inputNumber',
            'dec': 'inputDecimal',
            'op': 'inputOperator',
            'eq': 'evaluate',
            'clr': 'clear',
        }
    }

    static handleInputAndUpdateDisplay(event) {
        console.log('test1');
        console.log(this);
        console.log('test2');
        console.log(this.handleInput);
        this.handleInput(event);
        this.displayService.update();
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