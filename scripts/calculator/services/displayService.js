const SELECTOR_CALC_DISPLAY = '.calculator__display';

export class DisplayHandler {
    constructor(calculator) {
        this.display = document.querySelector(SELECTOR_CALC_DISPLAY);
        this.calculator = calculator;

        this.htmlEntities = {
            '*': '&times;',
            '/': '&divide;'
        }
    }

    update() {
        let output = this.getOutput();
        this.display.innerHTML = output;
    }

    getOutput() {
        let tokens = this.getTokens();
        return tokens.join(' ');
    }

    getTokens() {
        let tokens = this.calculator.tokens.concat([this.calculator.currentToken]);
        return this.substituteWithEntities(tokens);
    }

    substituteWithEntities(tokens) {
        if (!tokens) return [];

        return tokens.map(function (token) {
            return this.htmlEntities[token] !== undefined ? this.htmlEntities[token] : token;
        }.bind(this));
    }
}