let num1 = 0;
let operator = "";
let num2 = 0;
let result = false;
const screen = document.getElementById("screen");

const reset = () => {
    num1 = 0;
    num2 = 0;
    operator = 0;
}

function operate (num, operator, numTwo) {
    num = parseInt(num);
    numTwo = parseInt(numTwo);
    let whatDo = operator; 
    reset();

    if (num2 === 0) {
        reset();
        screen.textContent = "Nice try";
        return;
    }

    if (whatDo === "+") {
        screen.textContent = num + numTwo;
        resultNum = num + numTwo;
        
        return num + numTwo;
    } else if (whatDo === "-") {
        screen.textContent = num - numTwo;
        resultNum = num - numTwo;
        return num - numTwo;
    } else if (whatDo === "*") {
        screen.textContent = num * numTwo;
        resultNum = num * numTwo;
        return num * numTwo;
    } else if (whatDo === "/") {
        screen.textContent = +(num / numTwo).toFixed(2);
        resultNum = +(num / numTwo).toFixed(2);
        return num / numTwo;
    }
}

function getCalculation () {
    const equals = document.getElementById("=");
    equals.addEventListener("click", () => {
        num2 = parseFloat(screen.textContent);
        operate(num1, operator, num2);
        result = true;
    })
}

function screenUpdate () {
    const numberButtons = document.querySelectorAll(".number");

    numberButtons.forEach(element => {
        element.addEventListener("click", () => {
            if (screen.textContent === "+" ||
            screen.textContent === "-" ||
            screen.textContent === "/" ||
            screen.textContent === "*") {
                screen.textContent = (element.id);
            } else {
                screen.textContent += (element.id);
            }
        })
    });
}

function operatorButtons () {
    const operateButtons = document.querySelectorAll(".operator");

    operateButtons.forEach(e => {
        if (e.id !== "=") {
            e.addEventListener("click", () => {
                if (result === false) {
                    if (operator === "") {
                        num1 = parseFloat(screen.textContent);
                        screen.textContent = (e.id);
                        operator = screen.textContent;
                    } else {
                        num2 = parseFloat(screen.textContent);
                        num1 = operate(num1, operator, num2);
                        screen.textContent = (e.id);
                        operator = screen.textContent;
                    }
                } else {
                    num1 = parseFloat(screen.textContent);
                    screen.textContent = (e.id);
                    operator = screen.textContent;
                    num2 = 0;
                }
            })
        }
    })
}

function clear() {
    const clearButton = document.getElementById("clear");

    clearButton.addEventListener("click", () => {
        screen.textContent = "";
        num1 = 0;
        num2 = 0;
        operator = "";
    })
}


screenUpdate();
operatorButtons();
getCalculation();
clear();