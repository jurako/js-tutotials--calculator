const SELECTOR_CALC_DISPLAY = '.calculator__display';

export class DisplayHandler {
    constructor(calculator) {
        this.display = document.querySelector(SELECTOR_CALC_DISPLAY);
        this.calculator = calculator;

        this.entities = {
            '*': '&times;',
            '/': '&divide;'
        }
    }

    update() {
        let output = this.getOutput();
        this.display.innerHTML = output;
    }

    getOutput() {
        console.log(this.entities);
        let output = this.calculator
            .tokens
            .map(this.replaceCharactersWithEntities)
            .join(' ');

        return output ? output + ' ' + this.calculator.currentToken : this.calculator.currentToken;
    }

    replaceCharactersWithEntities(token) {
        console.log(this.entities);
        console.log(token);
        return this.entities[token] !== undefined ? this.entities[token] : token;
    }
}