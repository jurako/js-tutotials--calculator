export class operatorInputState {

    constructor(newCalculator) {
        this.calculator = newCalculator;
    }

    inputNumber() {
        console.log('Input number operatorInputState!');
    }

    inputDecimal() {
        console.log('Input decimal operatorInputState!');
    }

    inputOperator() {
        console.log('Input operator operatorInputState!');
    }

    getResult() {
        console.log('Get result operatorInputState!');
    }
}