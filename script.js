let num = '';
let values = [];
let operatorValue = [];

window.onload = function() {
    operate();
    display();
    clear();
};

function add () {
    let sum = parseFloat(values[values.length - 2]) + parseFloat(values[values.length - 1]);
    values = [];
    values.push(sum);
    let display = document.querySelector('#display');
    display.textContent = sum;
}

function subtract () {
    let minus = parseFloat(values[values.length - 2]) - parseFloat(values[values.length - 1]);
    values = [];
    values.push(minus);
    let display = document.querySelector('#display');
    display.textContent = minus;
}

function multiply () {
    let multiplication = parseFloat(values[values.length - 1]) * parseFloat(values[values.length - 2]);
    values = [];
    values.push(multiplication);
    let display = document.querySelector('#display');
    display.textContent = multiplication;
}

function divide () {
    let display = document.querySelector('#display');
    const operators = document.querySelectorAll('.operators');
    const clear = document.querySelector('#clear');
    const numbers = document.querySelectorAll('.numbers');
    if (values[values.length - 1] === '0') {
        display.textContent = 'ERROR, PLZ CLEAR';
        operators.forEach(operator => {
            operator.disabled = true;
            clear.addEventListener('click', () => {
                operator.disabled = false;
            })
        })
        numbers.forEach(number => {
            number.disabled = true;
            clear.addEventListener('click', () => {
                number.disabled = false;
            })
        })
    }
    else {
        let divide = parseFloat(values[values.length - 2]) / parseFloat(values[values.length - 1]);
        values = [];
        values.push(divide);
        display.textContent = divide;
    }
}

function operate (operator, firstNumber, secondNumber) {
    const operators = document.querySelectorAll('.operators');
    const display = document.querySelector('#display')
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            operatorValue.push(operator.textContent);
            if (values.length === 0) {
                getNumber();
            }
            else if (values.length >= 1) {
                getNumber();
                if (operatorValue[operatorValue.length - 2] === '+') {
                    add();
                }
                else if (operatorValue[operatorValue.length - 2] === '-') {
                    subtract();
                }
                else if (operatorValue[operatorValue.length - 2] === 'x') {     
                    multiply();
                }
                else if (operatorValue[operatorValue.length - 2] === '÷') {
                    divide();
                }
            }
        });
    });
}

function getNumber () {
    const display = document.querySelector('#display')
    values.push(display.textContent)
    num = '';
}

function display () {
    const numbers = document.querySelectorAll('.numbers');
    const display = document.querySelector('#display')
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            limitDecimal();
            num += number.textContent;
            display.textContent = num;
        });
    });
}

function clear () {
    const clear = document.querySelector('#clear');
    const display = document.querySelector('#display')
    clear.addEventListener('click', () => {
            display.textContent = 0;
            num = ''
            values = [];
            operatorValue = [];
        });
}

function limitDecimal () {
    let display = document.querySelector('#display').textContent;
    let decimal = document.querySelector('#decimal')
    if (display.includes('.')) {
        decimal.disabled = true;
    }
    else {
        decimal.disabled = false;
    }
}