// <<<<<<< editing-branch
//11/01/2022 successfully able to use functions, variables, const/let, mathematical symbols, inputs, 
//11/01/2022 if / else if & else statements in JavaScript.
//12/01/2022 sucessfully added new function to original one
=======
//const prompt = require("prompt-sync")();
// >>>>>>> main


function vol(){
    let a = parseFloat(prompt('Enter your number to get volume for the cube: '));
    a = a * a * a;
    console.log(prompt(a));
}

function calc (){
    const symbol = prompt('Enter operator +, -, *, / or vol : ');
    if (symbol == 'vol'){
        vol();
        repeat();
    }
    const num1 = parseFloat(prompt('Enter first number: '));
    const num2 = parseFloat(prompt('Enter second number: '));

// <<<<<<< editing-branch
    let result;

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
    prompt(`${num1} ${symbol} ${num2} = ${result}`);

    repeat();
// =======
calc();
if (symbol == '+') {
    result = num1 + num2;
}
else if (symbol == '-') {
    result = num1 - num2;
}
else if (symbol == '*'){
    result = num1 * num2;
// >>>>>>> main
}

//function added in order to create a repeat option
function repeat(){
    const re = prompt('If you want to repeat type in yes, if not then no: ');
    if (re == 'yes'){
        calc();
    }
    else{
        prompt('GoodBye');
        throw new Error();
    }
}

calc();