let num = '';
let values = [];
let operatorValue = [];

window.onload = function() {
    operate();
    display();
    clear();
    keyboardSupport();
};

function add () {
    let sum = parseFloat(values[values.length - 2]) + parseFloat(values[values.length - 1]);
    values = [];
    values.push(sum);
    let display = document.querySelector('#display');
    if (sum % 1 !== 0) {
        let roundedAnswer = (Math.round(sum * 100000) / 100000).toFixed(5);
        display.textContent = parseFloat(roundedAnswer);
    }
    else {
        display.textContent = sum;
    }
}

function subtract () {
    let minus = parseFloat(values[values.length - 2]) - parseFloat(values[values.length - 1]);
    values = [];
    values.push(minus);
    let display = document.querySelector('#display');
    if (minus % 1 !== 0) {
        let roundedAnswer = (Math.round(minus * 100000) / 100000).toFixed(5);
        display.textContent = parseFloat(roundedAnswer);
    }
    else {
        display.textContent = minus;
    }
}

function multiply () {
    let multiplication = (parseFloat(values[values.length - 1]) * parseFloat(values[values.length - 2]));
    values = [];
    values.push(multiplication);
    let display = document.querySelector('#display');
    if (multiplication % 1 !== 0) {
        let roundedAnswer = (Math.round(multiplication * 100000) / 100000).toFixed(5);
        display.textContent = parseFloat(roundedAnswer);
    }
    else {
        display.textContent = multiplication;
    }
}

function divide () {
    let display = document.querySelector('#display');
    const btn = document.querySelectorAll('.btn');
    const clear = document.querySelector('#clear');
    const numbers = document.querySelectorAll('.numbers');
    if (values[values.length - 1] === '0') {
        display.textContent = 'ERROR, PLZ CLEAR';
        btn.forEach(button => {
            button.disabled = true;
            clear.addEventListener('click', () => {
                button.disabled = false;
            })
        })
    }
    else {
        let divide = (parseFloat(values[values.length - 2]) / parseFloat(values[values.length - 1]));
        values = [];
        values.push(divide);
        if (divide % 1 !== 0) {
            let roundedAnswer = (Math.round(divide * 100000) / 100000).toFixed(5);
            display.textContent = parseFloat(roundedAnswer);
        }
        else {
            display.textContent = divide;
        }
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
    const backspace = document.querySelector('#backspace')
    const display = document.querySelector('#display')
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            limitDecimal();
            num += number.textContent;
            display.textContent = num;
        });
    });
    backspace.addEventListener('click', () => {
        num = num.slice(0,-1);
        console.log(num);
        display.textContent = num;
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

function keyboardSupport () {
    document.onkeydown = function(evt) {
        var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
        if (keyCode === 49) {
            document.querySelector('#one').click();
        }
        else if (keyCode === 50) {
            document.querySelector('#two').click();
        }
        else if (keyCode === 51) {
            document.querySelector('#three').click();
        }
        else if (keyCode === 52) {
            document.querySelector('#four').click();
        }
        else if (keyCode === 53) {
            document.querySelector('#five').click();
        }
        else if (keyCode === 54) {
            document.querySelector('#six').click();
        }
        else if (keyCode === 55) {
            document.querySelector('#seven').click();
        }
        else if (keyCode === 56) {
            document.querySelector('#eight').click();
        }
        else if (keyCode === 57) {
            document.querySelector('#nine').click();
        }
        else if (keyCode === 48) {
            document.querySelector('#zero').click();
        }
        else if (keyCode === 190) {
            document.querySelector('#decimal').click();
        }
        else if (keyCode === 13) {
            document.querySelector('#equals').click();
        }
        else if ((keyCode === 8) || (keyCode === 37)) {
            document.querySelector('#backspace').click();
        }
        else if (keyCode === 27) {
            document.querySelector('#clear').click();
        }
        else if (keyCode === 189) {
            document.querySelector('#subtract').click();
        }
        else if (keyCode === 191) {
            document.querySelector('#divide').click();
        }
        else if (keyCode === 88) {
            document.querySelector('#multiply').click();
        }
        else if (keyCode === 187) {
            document.querySelector('#add').click();
        }
        else {
            return true;
        }
    }
}