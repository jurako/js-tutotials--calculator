/**
 * Parses input characters into tokens
 * and stores all tokens in array
 */
export class TokenHandler {
    constructor() {
        this.tokens = [];
        this.currentToken = '0';
        // alert(this.getLastCharacter(this.currentToken));
        // let tmpInp = '+';
        // alert(this.isOperator(tmpInp));
    }

    parse(input) {
        if(typeof input != 'string' || typeof input != 'number') {
            return false;
        }
        if(typeof input == 'number') {
            input = input.toString();
        }

        switch (input) {

            case this.isNumeric(input):

                if(this.currentToken == '0') {
                    this.currentToken = input;
                }

                if(this.isOperator(this.currentToken)) {
                    this.currentToken = input;
                    this.store(this.currentToken);
                }

                if(this.currentToken == '0') {
                    this.currentToken = input;
                }

            break;

            default:
            break;
        }

    }

    store() {

    }

    clear() {

    }



    //util functions
    isNumeric(input) {
        return /\d/.test(input);
    }

    isOperator(input) {
        return /[+-/*]/.test(input);
    }

    getLastCharacter(input) {
        return input.slice(-1);
    }
}