// 🧑‍💻 “Write a function in JavaScript to reverse a given number. For example, if the input is 1234, the output should be 4321.”

function reverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        let lastDigit = num % 10;         // last digit
        rev = rev * 10 + lastDigit;       // shift + add
        num = Math.floor(num / 10);       // remove last digit
    }
    return rev;
}

console.log(reverseNumber(54321));

// “Write a JavaScript function that checks whether a given number is even or odd. How would you optimize it for large inputs?”

function evenOddNum(num) {
    return num % 2 === 0 ? "Number is Even" : "Number is Odd"
}

console.log(evenOddNum(15))


// 🧑‍💻 “Create a function to determine if a number is prime or not. Optimize your solution to reduce time complexity.”

function checkPrimeNumber(num) {
    if (num > 1) {
        return false
    }
    const root = Math.sqrt(num)

    if (root % 2 === 0) {
        return "This is a not a prim number"
    } else {
        return "this is a prim number"
    }
}

console.log(checkPrimeNumber(1))


// Swap two numbers in JavaScript without using a third variable. Can you do it using arithmetic or destructuring

let c = 10;
let d = 20;

[d, c] = [c, d]

console.log(c, d)


// Write a JavaScript program that takes three numbers and returns the largest among them using


function largestThreeNum(...largNum) {

    const [a, b, c] = [...largNum]



    if (a > b && a > c) {
        console.log(`${a} a is largest number`)
    } else if (b > a && b > c) {
        console.log(`${b} a is largest number`)
    } else {
        console.log(`${c} a is largest number`)
    }
}
largestThreeNum(110, 2220, 80, 30, 5, 90)