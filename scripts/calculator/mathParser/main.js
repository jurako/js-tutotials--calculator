import { Queue } from '../libs/queue.js';
import { ShuntingYard } from './shuntingYard.js'
import { PostfixCalculator } from './postfixCalculator.js'


export class MathParser {
    constructor(tokens) {
        this.shuntingYard = new ShuntingYard();
        this.postfixCalculator = new PostfixCalculator();
    }

    execute() {
        for (let i = 0; i < this.tokens.length; i++) {
            this.parse(this.tokens[i]);
        }
    }

    //Shunting Yard Algorithm
    parse() {
        if (this.isOperand(token)) {
            this.outputQueue.enqueue(token);
        } else if (this.isOperator(token)) {
            //getOperatorPrecedence
            this.operatorStack
        } else {
            throw Error;
        }
    }

    //getOperatorPrecendece
    isOperand(token) {
        return !isNaN(token);
    }

    isOperator(token) {
        return /\+-*\//.test(token);
    }

}