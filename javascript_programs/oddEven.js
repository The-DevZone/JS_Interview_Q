function isEven(n) {
    return (n % 2 == 0);
}
let n = 101;
isEven(n) ? console.log("Even") : console.log("Odd");

function checkOddOrEven(n) {
    if (n & 1 == 1) {
        return "Number is odd";
    }
    return "Number is even";
}

console.log(checkOddOrEven(12));
console.log(checkOddOrEven(121));

function checkOddOrEven(number) {
    return (number | 1) === number ? 'Odd' : 'Even';
}

console.log(checkOddOrEven(14));
console.log(checkOddOrEven(17));

let num = 4;
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

let nums = 8;
let result = (nums % 2 === 0) ? "The number is even." : "The number is odd.";
console.log(result);