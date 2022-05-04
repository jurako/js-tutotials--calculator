
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

/**
 * Parses input characters into tokens
 * and stores all tokens in array
 */
export class InputHandler {
    constructor() {
        this.inputSource = 'HTML';

        if(this.inputSource) {
            this._addEventListeners();
        }
    }

    dispatch(inputType, inputValue) {
        alert('testasdf');

        //parse
        //display
    }

    _addEventListeners() {
        document.querySelector(SELECTOR_CALCULATOR).addEventListener('click', function (event) {
            let input = event.target.dataset;

            if(this.isValid(input.value)) {
                this.dispatch(input.type, input.value);
            }

        }.bind(this));
    }

    //util functions
    isValid(value) {
        return /[0-9\+\-\*\/]/.test(value);
    }
}