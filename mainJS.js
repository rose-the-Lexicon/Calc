let num1 = 0;
let operator = "";
let num2 = 0;
const screen = document.getElementById("screen");

function operate (num, operator, numTwo) {
    num = parseInt(num);
    numTwo = parseInt(numTwo);

    if (operator === "+") {
        screen.textContent = num + numTwo;
        return num + numTwo;
    } else if (operator === "-") {
        screen.textContent = num - numTwo;
        return num - numTwo;
    } else if (operator === "*") {
        screen.textContent = num * numTwo;
        return num * numTwo;
    } else if (operator === "/") {
        screen.textContent = num / numTwo;
        return num / numTwo;
    }
}

function getCalculation () {
    const equals = document.getElementById("=");
    equals.addEventListener("click", () => {
        num2 = parseFloat(screen.textContent);
        operate(num1, operator, num2);
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
            })
        }
    })
}

function clear() {
    const clearButton = document.getElementById("clear");
    const allButtons = document.querySelectorAll("button");

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