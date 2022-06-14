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
const upperDisplay = document.querySelector(".upper-display");
const equalBtn = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".clear");


let operator;
let lowerDisplayValue;
let firstNum;
let secondNum;
let temp;
let solution;
let operatorCount = 0;
//prints numbers to display
numBtn.forEach(element => element.addEventListener("click", function () {
    lowerDisplay.textContent += element.textContent;
    lowerDisplayValue = lowerDisplay.textContent;
}));

//gets firstNum & operator, updates display content

operatorBtn.forEach(element => element.addEventListener("click", function () {

    if (
        lowerDisplayValue.slice(lowerDisplayValue.length - 1) === "+" ||
        lowerDisplayValue.slice(lowerDisplayValue.length - 1) === "-" ||
        lowerDisplayValue.slice(lowerDisplayValue.length - 1) === "*" ||
        lowerDisplayValue.slice(lowerDisplayValue.length - 1) === "/"
    ) {
        return 1;
    }
    if (operatorCount > 0 && firstNum) {
        calcAndUpdate();

    }
    lowerDisplay.textContent += element.textContent;
    lowerDisplayValue = lowerDisplay.textContent;
    operator = element.className.split(" ")[1];
    temp = lowerDisplayValue.length;
    firstNum = parseInt(lowerDisplayValue.slice(0, lowerDisplayValue.length - 1));
    operatorCount++

}));

//Runs calculation on equal sign click
equalBtn.addEventListener("click", function () {
    secondNum = parseInt(lowerDisplayValue.slice(temp, lowerDisplayValue.length));
    zeroDivision();
    if (!operator || !firstNum || !secondNum) {
        return 1;
    }
    calcAndUpdate();
    operatorCount--;
});

//Clears everything
clearBtn.addEventListener("click", function () {
    lowerDisplay.textContent = "";
    upperDisplay.textContent = "";
    lowerDisplayValue = "";
    operator = "";
    firstNum = "";
    secondNum = "";
    temp = "";
    operatorCount = 0;
    solution = "";
});

function calcAndUpdate() {
    zeroDivision();
    secondNum = parseInt(lowerDisplayValue.slice(temp, lowerDisplayValue.length))
    upperDisplay.textContent = lowerDisplay.textContent;
    lowerDisplay.textContent = operate(window[operator], firstNum, secondNum);

}

function zeroDivision() {
    if (operator === 'divide' && secondNum === 0) {
        alert("Dont divide by 0 ape brain");
        return 1;
    }
}