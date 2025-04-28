function factorial(num) {
    if (num < 0) {
        return " the number is negative.";
    }
    
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i; 
    }
    return fact;
}

let number = parseInt(prompt("Enter a number:"));
let result = factorial(number);
document.writeln("Factorial of " + number + " is: " + result);
