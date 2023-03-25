let firstNumber = '';
let values = [];
let operatorValue = [];

window.onload = function() {
    operate();
    clear();
    display();
    getNumber();
    disableDecimal();
};

function add () {
    let sum = parseFloat(values[values.length - 2]) + parseFloat(values[values.length - 1]);
    let display = document.querySelector('#display');
    display.textContent = sum;
    console.log(values);
}

function subtract () {
    let minus = parseFloat(values[values.length - 2]) - parseFloat(values[values.length - 1]);
    let display = document.querySelector('#display');
    display.textContent = minus;
}

function multiply () {
    let multiplication = parseFloat(values[values.length - 1]) * parseFloat(values[values.length - 2]);
    let display = document.querySelector('#display');
    display.textContent = multiplication;
}

function divide () {
    let display = document.querySelector('#display');
    if (values[values.length - 1] === '0') {
        display.textContent = 'ERROR';
    }
    else {
        let minus = parseFloat(values[values.length - 2]) / parseFloat(values[values.length - 1]);
        display.textContent = minus;
    }
}

function operate (operator, firstNumber, secondNumber) {
            let display = document.querySelector('#display');
            values.push(display.textContent);
            const operators = document.querySelectorAll('.operators');
            for (let i = 0; i < operators.length; i++) {
                operators[i].addEventListener('click', () => {
                    let operator = operators[i].textContent
                        if (operator === '+') {
                            add();
                        }
                        else if (operator === '-') {
                            subtract();
                        }
                        else if (operator === 'x') {
                            multiply();
                        }
                        else if (operator === '÷') {
                            divide();
                        }
                    })
            };
            console.log(values);
    };




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