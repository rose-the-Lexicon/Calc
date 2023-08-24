let num1;
let operator;
let num2;
let result;
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
    console.log(equals);
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
                num1 = parseFloat(screen.textContent);
                screen.textContent = (e.id);
                operator = screen.textContent;
            })
        }
    })
}


screenUpdate();
operatorButtons();
getCalculation();