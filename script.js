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
// 
    const numbers = Array.from(document.querySelectorAll('.numbers'));
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', () => {
            let firstNumber = numbers[i].textContent;
            console.log(firstNumber);
        });
    };


//Store operator value in variable
    const add = document.querySelector('#add');
    const subtract = document.querySelector('#subtract');
    const multiply = document.querySelector('#multiply');
    const divide = document.querySelector('#divide');
    add.addEventListener('click', () => {
        const operator = add;
        console.log(operator);
    });
    subtract.addEventListener('click', () => {
        const operator = subtract;
        console.log(operator);
    });
    multiply.addEventListener('click', () => {
        const operator = multiply;;
        console.log(operator);
    });
    divide.addEventListener('click', () => {
        const operator = divide;
        console.log(operator);
    });




}




