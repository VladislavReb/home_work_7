let calcSum = (a, b) => a + b;
let calcMultiply = (a, b) => a * b;
let calcMinus = (a, b) => a - b;
let calcDivide = (a, b) => a / b;


function calculate() {
    let number1 = +prompt('Enter any number');
    let operator = prompt('Enter one of the suggested operator (*/+-)');
    let number2 = +prompt('Enter any number again');

    function sum() {
        alert(number1 + number2);
    }

    function multiply() {
        alert(number1 * number2);
    }

    function minus() {
        alert(number1 - number2);
    }

    function divide() {
        alert(number1 / number2);
    }

    if (isNaN(number1) || isNaN(number2)) {
        alert('Incorect input');
    } else {
        if (operator === '+') {
            sum();
        }
        if (operator === '*') {
            multiply();
        }
        if (operator === '-') {
            minus();
        }
        if (operator === '/') {
            divide();
        }
    }
}

calculate()
