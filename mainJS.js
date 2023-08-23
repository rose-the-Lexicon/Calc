function operate (num, operator, numTwo) {
    num = parseInt(num);
    numTwo = parseInt(numTwo);

    if (operator === "+") {
        return num + numTwo;
    } else if (operator === "-") {
        return num - numTwo;
    } else if (operator === "*") {
        return num * numTwo;
    } else if (operator === "/") {
        return num / numTwo;
    }
}

