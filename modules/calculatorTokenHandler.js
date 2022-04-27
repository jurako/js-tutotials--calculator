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

        switch (input) {
            case value:

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
        return /\d/.test(input.toString());
    }

    isOperator(input) {
        return /[+-/*]/.test(input.toString());
    }

    getLastCharacter(input) {
        return input.toString().slice(-1);
    }
}