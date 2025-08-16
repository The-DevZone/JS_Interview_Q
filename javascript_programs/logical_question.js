
function insertElement(elem){
    let x = 0

}

console.log(insertElement([10,20,30,40]))



function isAnagram(str1, str2) {
  let sorted1 = str1.split("").sort().join("");
  let sorted2 = str2.split("").sort().join("");
  return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false




let arr = [10, 15, 20, 25, 30];
let oddNumbers = arr.filter(num => num % 2 !== 0);

console.log(oddNumbers); // [15, 25]

// Reverse a Number
let num = 12345;
let reversed = Number(num.toString().split("").reverse().join(""));

console.log(reversed); // 54321


// Remove Duplicates Without Set

let arrs = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let num of arrs) {
  if (!unique.includes(num)) {
    unique.push(num);
  }
}

console.log(unique); // [1, 2, 3, 4, 5]


// Convert Object to String
const person = { name: "Rohit", age: 24, city: "Delhi" };

let str = Object.entries(person)
  .map(([key, value]) => `${key}: ${value}`)
  .join(", ");

console.log(str); 
// "name: Rohit, age: 24, city: Delhi"


// Q5. Palindrome Check
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


// . Find Max & Min without Math.max/min
let numbers = [10, 40, 2, 99, 45];
let max = numbers[0];
let min = numbers[0];

for (let num of numbers) {
  if (num > max) max = num;
  if (num < min) min = num;
}

console.log("Max:", max); // 99
console.log("Min:", min); // 2


// Capitalize First Letter of Each Word

let firstLetterCap = "hello world";

let capitalized = firstLetterCap
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalized); // "Hello World"