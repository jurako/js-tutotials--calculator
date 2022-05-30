export class MathParser {
    constructor(tokens) {
        this.operatorStack = [];
        this.outputQueue = new Queue();
        this.tokens = tokens;

        this.operatorPrecedence = {
            1: ['*', '/'],
            2: ['+', '-']
        }
    }

    //readTokens
    readTokens() {
        while(this.tokens.length > 0) {
            let token = this.tokens.unshift();

            if(!isNaN(token)) {
                this.outputQueue.enqueue(token);
            } else if(this.isOperator(token)) {
                //getOperatorPrecedence
                this.operatorStack
            } else {
                throw Error;
            }

        }
    }

    //getOperatorPrecendece

    isOperator(token) {
        return /+-*\//.test(token);
    }

}


class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.unshift(item);
    }

    dequeue() {
        this.queue.pop();
    }
}