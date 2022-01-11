//const prompt = require("prompt-sync")();

// Making anything using current knowledge without using google
// later with better idea of what u wanna make then use stackoverflow

const symbol = prompt('Enter operator +, -, * or / : ');
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

let result;

calc();
if (symbol == '+') {
    result = num1 + num2;
}
else if (symbol == '-') {
    result = num1 - num2;
}
else if (symbol == '*'){
    result = num1 * num2;
}
else{
    result = num1 / num2;
}
document.write(`${num1} ${symbol} ${num2} = ${result}`);
