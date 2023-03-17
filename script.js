let firstNumber = '';
let values = [];

window.onload = function() {
    operate();
    clear();
};

function add (firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    let display = document.querySelector('#display');
    display.textContent = sum;
}

function subtract (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate (operator, firstNumber, secondNumber) {
//Store first clicked number in variable and display
    getFirstNumber();


//Store operator value in variable
    const operators = document.querySelectorAll('.operators');
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', () => {
            let operator = operators[i].textContent
            const equals = document.querySelector('#equals');
            equals.addEventListener('click', () => {
                console.log(operator);
                if (operator === '+') {
                    add();
                }
                else if (operator === '-') {
                    subtract(firstNumber, secondNumber);
                }
                else if (operator === '*') {
                    multiply(firstNumber, secondNumber);
                }
                else if (operator === '÷') {
                    divide(firstNumber, secondNumber);
                }
            })
        });
    };



// Perform operate function

}



function getFirstNumber () {
    const numbers = Array.from(document.querySelectorAll('.numbers'));
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', () => {
            firstNumber += numbers[i].textContent;
            let display = document.querySelector('#display');
            display.textContent = firstNumber;
            const operators = Array.from(document.querySelectorAll('.operators'));
                operators.forEach(operator => {
                    operator.addEventListener('click', () => {
                        values.push(display.textContent);
                        firstNumber = '';
                        console.log(values)
                })
            })
        });
    };
}


function clear () {
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
        let display = document.querySelector('#display');
        display.textContent = 0;
        firstNumber = '';
        values = [];
    });
}