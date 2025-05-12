let a = 10;
let b = 20;


let c = a * b;
console.log(c)/// write a function multiplication
function multiplication() {
    return a * b
} 
console.log(multiplication())///Using Arrow function
let twoMultiple = () => {
    return a * b
}



console.log(twoMultiple())///Using Multiplication assignment operato/// Multiplicationassignmentoperator
console.log(a *= b);
// Using for loop
let arr = [a, b]
for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[0] * arr[1])
    break;
}

function multiplication(a, b) {
    let result;
    for (let i = 0; i <= b; i++) {
        result = a * b
        break;
    }
    return result;
}
console.log(multiplication(18, 20))///Using for loop