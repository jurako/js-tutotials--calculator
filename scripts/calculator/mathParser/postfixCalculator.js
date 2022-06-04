import { isOperand, isOperator } from '../libs/utils.js';

export class PostfixCalculator {
    constructor() {
        this.outputQueue = [];
        this.tokenStack = [];

        this.operatorMap = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b
        }
    }

    execute() {
        while (this.outputQueue.length > 0) {

        }
    }
}