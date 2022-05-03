
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
export class TokenHandler {
    constructor() {
        this.tokens = [];
        this.currentToken = '0';

        //math parser

        this._addEventListeners();
        // alert(this.getLastCharacter(this.currentToken));
        // let tmpInp = '+';
        // alert(this.isOperator(tmpInp));
    }

    parse(input) {
        if (typeof input != 'string' || typeof input != 'number') {
            return false;
        }
        if (typeof input == 'number') {
            input = input.toString();
        }

        switch (input) {

            case this.isNumeric(input):
                this.parseNumber(input);
                break;

            case this.isNumeric(input):
                this.parseNumber(input);
                break;

            default:
                break;

        }

    }

    parseNumber(input) {
        if (this.currentToken == '0') {
            this.currentToken = input;
        }

        if (this.isOperator(this.currentToken)) {
            this.currentToken = input;
            this.store(this.currentToken);
        }

        if (this.isNumeric(this.currentToken)) {
            this.currentToken += input;
        }
    }

    parseDecimal(input) {
        if (this.isNumeric(this.currentToken) || !this.hasDecimal(this.currentToken)) {

        }
    }

    store() {

    }

    clear() {

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

    //util functions
    isNumeric(input) {
        return /[\d\.]/.test(input);
    }

    isOperator(input) {
        return /[+-/*]/.test(input);
    }

    getLastCharacter(input) {
        return input.slice(-1);
    }
}