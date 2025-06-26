const arr = [21, 12, 13, 45, 54];

if (arr.includes(12)) {
    console.log("12 is present in the array.");
} else {
    console.log("12 is not present in the array.");
}




const arr1 = [10, 72, 3, 14, 5];

// Check if the array includes the value 3
if (arr1.indexOf(3) >= 0) {
    console.log("3 is present in the array.");
} else {
    console.log("3 is not present in the array.");
}



const arr2 = [5, 20, 30, 40, 50];

// Use the find() method to check if the
// value 30 is present in the array
const result = arr2.find(element => element === 30);

// Check the result and log a message
if (result !== undefined) {
    console.log("30 is present in the array.");
} else {
    console.log("30 is not present in the array.");
}

// Define an array
const array1 = [13, 23, 33, 43, 53];

// Initialize a flag variable
let p = false;

// Iterate through the array and check each element
for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 53) {
        p = true;
        break;
    }
}

// Check the flag variable and log a message
if (p) {
    console.log("53 is present in the array.");
} else {
    console.log("53 is not present in the array.");
}

const arr3 = [5, 20, 30, 40, 50];

// Use the some() method to check if the
// value 30 is present in the array
const results = arr3.some(element => element === 30);

// Check the result and log a message
if (result !== undefined) {
    console.log("30 is present in the array.");
} else {
    console.log("30 is not present in the array.");
}

const arr4 = [1, 2, 3, 4, 5];

const checkElement = (array, element) => array.filter(el => el === element).length > 0;

const isThreePresent = checkElement(arr4, 3);
const isEightPresent = checkElement(arr4, 8);

console.log(isThreePresent); // true
console.log(isEightPresent); // false


// Define an array
const arr5 = [1, 2, 3, 4, 5];

// Convert the array into a Set
const set = new Set(arr5);

// Function to check if an element exists in the array
const isElementPresent = (array, element) => set.has(element);

// Usage examples
console.log(isElementPresent(arr5, 3)); // true
console.log(isElementPresent(arr5, 8)); // false


