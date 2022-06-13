function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}


const numBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const lowerDisplay = document.querySelector(".lower-display");
const equalBtn = document.querySelector(".equal-sign");

let operator;
let lowerDisplayValue;
let firstNum;
let secondNum;
let temp;

//prints numbers to display
numBtn.forEach(element => element.addEventListener("click", function () {
    lowerDisplay.textContent += element.textContent;
    lowerDisplayValue = lowerDisplay.textContent;
}));

//gets firstNum & operator, updates display content
operatorBtn.forEach(element => element.addEventListener("click", function () {
    lowerDisplay.textContent += element.textContent;
    lowerDisplayValue = lowerDisplay.textContent;
    operator = element.className.split(" ")[1];

    temp = lowerDisplayValue.length;
    firstNum = parseInt(lowerDisplayValue.slice(0, lowerDisplayValue.length - 1));
}));

equalBtn.addEventListener("click", function () {
    secondNum = parseInt(lowerDisplayValue.slice(temp, lowerDisplayValue.length))
    
    operate(operator,firstNum, secondNum);
});