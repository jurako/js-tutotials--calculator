import { ShuntingYard } from './shuntingYard.js'
import { PostfixCalculator } from './postfixCalculator.js'


export class MathParser {
    constructor() {
        this.shuntingYard = new ShuntingYard();
        this.postfixCalculator = new PostfixCalculator();
    }

    execute(tokens) {

        let RPN = '';
        let result = '0';

        try {
            RPN = this.shuntingYard.execute(tokens);
            result = this.postfixCalculator.execute(RPN);

            if (isNaN(result)) {
                throw new Error('Error');
            }

        } catch (err) {
            return 'Error';
        }

        return String(result);

    }
}