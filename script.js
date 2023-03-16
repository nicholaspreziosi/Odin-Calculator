window.onload = function() {
    operate();
};

function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
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
    const numbers = Array.from(document.querySelectorAll('.numbers'));
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', () => {
            let firstNumber = numbers[i].textContent;
            let display = document.querySelector('#display');
            display.textContent = firstNumber;
        });
    };

//Store operator value in variable
const operators = Array.from(document.querySelectorAll('.operators'));
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', () => {
        let operator = operators[i].textContent
    });
};


}




