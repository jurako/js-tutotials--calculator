import { isOperand, isOperator } from '../libs/utils.js';

export class ShuntingYard {
    constructor() {
        this.outputQueue = [];
        this.operatorStack = [];

        this.operatorPrecedence = {
            1: ['+', '-'],
            2: ['*', '/']
        }
    }

    execute(tokens) {

        for (let i = 0; i < tokens.length; i++) {
            this.parse(tokens[i]);
        }

        this.popOperatorStack();

        return this.outputQueue;
    }

    parse(token) {
        if (isOperand(token)) {
            this.handleOperand(token);
        } else if (isOperator(token)) {
            this.handleOperator(token);
        }
    }

    handleOperand(token) {
        this.outputQueue.push(token);
    }

    handleOperator(token) {
        let op1 = this.getPrecedence(token),
            op2 = this.getPrecedence(this.operatorStack.at(-1));

        while (op1 <= op2 && this.operatorStack.length > 0) {
            this.outputQueue.push(this.operatorStack.pop());
        }

        this.operatorStack.push(token);
    }

    getPrecedence(token) {
        return Object.keys(this.operatorPrecedence).find(key => this.operatorPrecedence[key].includes(token));
    }

    popOperatorStack() {
        while (this.operatorStack.length) {
            this.outputQueue.push(this.operatorStack.pop());
        }
    }
}