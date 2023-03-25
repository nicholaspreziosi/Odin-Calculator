let firstNumber = '';
let values = [0];

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
                    const equals = document.querySelector('#equals');
                    equals.addEventListener('click', () => {
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
                });
            };
    };




function getNumber () {
    const operators = document.querySelectorAll('.operators');
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            let display = document.querySelector('#display');
            values.push(display.textContent);
            firstNumber = '';
    })
    })
}



function display () {
    const numbers = document.querySelectorAll('.numbers');
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', () => {
            firstNumber += numbers[i].textContent;
            let display = document.querySelector('#display');
            display.textContent = firstNumber;
        });
    };
}


function clear () {
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
        let display = document.querySelector('#display');
        display.textContent = 0;
        firstNumber = '';
        values = [0];
    });
}

function disableDecimal () {
    let display = document.querySelector('#display');
    if (display.textContent.includes('.')) {
        document.getElementById('decimal').disabled = true;
    }
    else {
        document.getElementById('decimal').disabled = false;
    }
}