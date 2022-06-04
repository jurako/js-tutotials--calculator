import { ShuntingYard } from './shuntingYard.js'
import { PostfixCalculator } from './postfixCalculator.js'


export class MathParser {
    constructor() {
        this.shuntingYard = new ShuntingYard();
        this.postfixCalculator = new PostfixCalculator();
    }

    execute(tokens) {
        let RPN = this.shuntingYard.execute(tokens);
        console.log('test!!!');
        console.log(RPN);
    }
}