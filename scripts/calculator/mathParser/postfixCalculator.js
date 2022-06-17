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
        while (tokenQueue.length > 0) {
            this.parse(tokenQueue.shift());
        }
        return this.tokenStack.pop();
    }

    parse(token) {
        if (isOperand(token)) {
            this.handleOperand(token);
        } else if (isOperator(token)) {
            this.handleOperator(token);
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