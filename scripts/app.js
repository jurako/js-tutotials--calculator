import { Calculator } from './calculator/calculator.js';


let calculatorElements = document.querySelectorAll('.calculator');
for (let i = 0; i < calculatorElements.length; i++) {
    new Calculator( calculatorElements[i] );
}