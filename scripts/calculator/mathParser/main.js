import { ShuntingYard } from './shuntingYard.js'
import { PostfixCalculator } from './postfixCalculator.js'


export class MathParser {
    constructor() {
        this.shuntingYard = new ShuntingYard();
        this.postfixCalculator = new PostfixCalculator();
    }

    execute(tokens) {
        console.log('tokens: ' + tokens);
        let RPN = this.shuntingYard.execute(tokens);
        console.log('RPN: ' + RPN);
        let result = this.postfixCalculator.execute(RPN);
        console.log('result: ' + result);
        return result;

    }
}