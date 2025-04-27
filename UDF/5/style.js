function isArmstrong(num) {
    let originalNum = num;
    let sum = 0;
    let digits = num.toString().length; 

    while (num > 0) {
        let digit = num % 10; 
        sum += Math.pow(digit, digits); 
        num = Math.floor(num / 10); 
    }

    return sum === originalNum;
}

let number = parseInt(prompt("Enter a number:"));

if (isArmstrong(number)) {
    document.writeln(number + " is an Armstrong Number");
} else {
    document.writeln(number + " is Not an Armstrong Number");
}
