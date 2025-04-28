function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return "Cannot divide by zero!";
            }
        case '%':
            return a % b;
        default:
            return "Invalid operator!";
    }
}

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let op = prompt("Enter operator (+, -, *, /, %):");

let result = calculator(num1, num2, op);
document.write("Result: " + result);
