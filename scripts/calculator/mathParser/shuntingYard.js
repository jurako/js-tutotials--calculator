export class ShuntingYard {
    constructor(tokens) {
        this.result = 0;
        this.operatorStack = [];
        this.outputQueue = new Queue();

        this.operatorPrecedence = {
            1: ['*', '/'],
            2: ['+', '-']
        }
    }

    execute(tokens) {

        for (let i = 0; i < tokens.length; i++) {
            this.parse(tokens[i]);
        }

        return this.result;
    }

    parse(token) {

    }
}