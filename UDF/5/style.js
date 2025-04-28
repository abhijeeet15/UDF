function isArmstrong(num) {
    let temp = num;
    let count = 0;
    
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        count++;
    }
    
    let sum = 0;
    temp = num;


    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, count);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

let number = parseInt(prompt("Enter a number:"));

if (isArmstrong(number)) {
    document.write(number + " is an Armstrong Number");
} else {
    document.write(number + " is Not an Armstrong Number");
}
