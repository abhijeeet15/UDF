function isPrime(num) {
    if (num <= 1) {
        return false; 
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true; 
}

let number = parseInt(prompt("Enter a number:"));

if (isPrime(number)) {
    document.writeln(number + " is a Prime Number");
} else {
    document.writeln(number + " is Not a Prime Number");
}
