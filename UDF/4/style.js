function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; 
    }
    return sum;
}

let number = parseInt(prompt("Enter a number:"));
let result = findSum(number);
document.writeln("Sum of numbers from 1 to " + number + " is: " + result);
