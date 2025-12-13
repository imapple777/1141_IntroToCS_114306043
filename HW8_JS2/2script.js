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
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const resultText = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultText.innerText = "Result = Invalid input";
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }

    if (typeof result === "number") {
        resultText.innerText = "Result = " + result.toFixed(2);
    } else {
        resultText.innerText = "Result = " + result;
    }
}
