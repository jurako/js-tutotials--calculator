import { isOperand, isOperator } from '../libs/utils.js';

export class PostfixCalculator {
    constructor() {
        this.tokenStack = [];

        this.operatorMap = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b
        }
    }

    execute(tokenQueue) {
        console.log('tokenQueue: ' + tokenQueue);
        while (tokenQueue.length > 0) {
            console.log('this.tokenStack: ' + this.tokenStack);
            this.parse(tokenQueue.shift());
        }
        console.log('this.tokenStack: ' + this.tokenStack);
        return this.tokenStack.pop();
    }

    parse(token) {
        if (isOperand(token)) {
            this.handleOperand(token);
        } else if (isOperator(token)) {
            this.handleOperator(token);
        } else {
            //throw Error;
        }
    }

    handleOperand(token) {
        this.tokenStack.push(token);
    }

    handleOperator(operator) {
        let b = +this.tokenStack.pop();
        let a = +this.tokenStack.pop();

        let result = this.calc(a, b, operator);

        this.tokenStack.push(result);
    }

    calc(a, b, operation) {
        return this.operatorMap[operation](a, b);
    }
}