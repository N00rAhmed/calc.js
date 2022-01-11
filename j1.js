function calc (){
    const symbol = prompt('Enter operator +, -, * or / : ');
    const num1 = parseFloat(prompt('Enter first number: '));
    const num2 = parseFloat(prompt('Enter second number: '));

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
}

//function added in order to create a repeat option
function repeat(){
    const re = prompt('If you want to repeat type in yes, if not then no: ');
    if (re == 'yes'){
        calc();
    }
    else{
        prompt('GoodBye');
    }
}

calc();