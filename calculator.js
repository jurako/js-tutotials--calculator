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
const CLEAR     = 'clear';
const NUMBER    = 'number';
const DECIMAL   = 'dec';
const OPERATOR  = 'operator';
const CALCULATE = 'eq';



const OPERATOR_CLASSES = ['add', 'sub', 'mul', 'div'];

class Calculator {
    constructor() {
        this.display = document.querySelector(SELECTOR_DISPLAY);
        this.initialValue = '1';

        this.operations = [{operator: 'add', operand: '1'}, {operator: 'add', operand: '5'}];
        this.currentValue = this.createCurrentOperationObj();

        this._addEventListeners();
    }

    handle(button) {

        switch(button) {
            
            case DECIMAL:
            case NUMBER:
                this.processOperand();
                break;

            case OPERATOR:
                this.processOperator();
                break;

            case CALCULATE:
                this.calc();
                break;

            case CLEAR:
                this.clear();
                break;
        }

        this.updateDisplay();

    }

    calc() {
        let sum = 0,
            operandA = this.initialValue,
            operandB = '',
            operator = '';

        for(let i = 0; i < this.operations.length; i++) {
            operator = operations[i].operator;

            if(operator == 'mul' || operator == 'div') {

                operandB = operations[i].operand;
                this[operator](operandA, operandB);

            } else {
                operandA = operations[i].operand;
            }
        }
            
    }

    getButtonHandler(value) {

        if( !isNaN(parseInt(value)) ) {
            return this.parseNumber;
        } else if (target.classlist)

        console.log(this.initialValue);
        // console.log(value);
        // console.log(typeof value);
        // console.log(parseInt(value));
        // console.log(typeof parseInt(value));
    }

    parseNumber(value) {
console.log(value);
console.log(this);
        if(this.operations.length == 0) {
            this.updateInitial(value);
            return;
        }

        if( this.phase == OPERAND_INPUT ) {

            if(this.currentOperation.operand == 0) {
                this.currentOperation.operand = value;
            } else {
                this.currentOperation.operand += value;
            }

        } else {

            this.operations.push( this.currentOperation );
            this.currentOperation = this.createCurrentOperationObj();
            this.phase = OPERAND_INPUT;

        }
    }

    createCurrentOperationObj() {
        return {
            operator: null,
            operand: null
        };
    }

    updateInitial(value) {
        if(this.initialValue == 0) {
            this.initialValue = value;
        } else {
            this.initialValue += value;
        }
    }

    _addEventListeners() {
        document.querySelector(SELECTOR_CALCULATOR).addEventListener('click', function(event) {

            const button = event.target.dataset.role;

            if(button) {
                this.handle(button);
            }

        }.bind(this));
    }
}

const calculator = new Calculator();