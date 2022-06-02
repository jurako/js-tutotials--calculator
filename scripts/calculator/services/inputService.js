export class InputService {

    constructor(calculator) {
        this.calculator = calculator;

        this.map = {
            'num': 'inputNumber',
            'dec': 'inputDecimal',
            'op': 'inputOperator',
            'eq': 'evaluate',
            'clr': 'clear',
        }
    }

    handleInput(event) {
        let { key, value } = event.target.dataset;

        if (this.isValidInput(value)) {
            this.dispatch(key, value);
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