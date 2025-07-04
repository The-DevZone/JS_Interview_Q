

// 1. Create a function that returns the last element of an array.
// solve-1 /
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}

// console.log(lastElement([1, 2, 3, 4, 5, 10, 20, 30, 40, 50])); // Output: 50


// 2. Find the combination of two arrays.
// solve -2
function combination(arr1, arr2) {
    return [...arr1, ...arr2];
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = []
// console.log(combination(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i])
    // console.log(arr3);

}
for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i])
    // console.log(arr3);

}

// console.log(arr3);


// 3. Generate a random integer between 0 to 18.
function randomInteger() {
    return Math.floor(Math.random() * 19);

}

// console.log(randomInteger())



// 4. Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values.

const filterStrings = (arr) => {
    return arr.filter(item => typeof item === 'string');
}


// console.log(filterStrings([1, 'apple', 2, 'banana', 3, 'cherry']));



const contianArray = (arrayValue) => {
    let newArray = []
    for (let i = 0; i < arrayValue.length; i++) {
        console.log(arrayValue[i])
        if (typeof arrayValue[i] === "number") {
            // console.log("enter hua ha");
            newArray.push(arrayValue[i])
        }
    }
    return newArray
}

let arr = [10, 20, 30, "R", "O", "H"];
// console.log(contianArray(arr))

// 5. Find the maximum number in an array.

const findMax = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    arr.forEach(num => {
        if (num > max) {
            max = num;
        }
    })
    return max;
}

// console.log(findMax([5, 10, 50, 50, 50, 60])); // Output: null


// 6. Write a function that returns the length of a given object (number of keys).

const objectLength = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return 0;
    }
    return Object.keys(obj).length;
}
// console.log(objectLength({ name: 'John', age: 30, city: 'New York' })); // Output: 3


// 7. In an array of objects filter out those objects which have gender's value male.


const users = [
    {
        name: "Rohit Verma",
        age: 25,
        gender: "Male",
        city: "Delhi",
        title: "Frontend Developer"
    },
    {
        name: "Monika Choudhery",
        age: 24,
        gender: "Female",
        city: "Jaipur",
        title: "Web Developer"
    },
    {
        name: "Ankit Sharma",
        age: 30,
        gender: "Male",
        city: "Mumbai",
        title: "Backend Developer"
    },
    {
        name: "Neha Singh",
        age: 27,
        gender: "Female",
        city: "Lucknow",
        title: "UI/UX Designer"
    },
    {
        name: "Sahil Mehra",
        age: 29,
        gender: "Male",
        city: "Chandigarh",
        title: "Full Stack Developer"
    }
];

const filterMale = users.filter(user => user.gender === "Male")

// console.log(filterMale);


// 8. Given an array of strings, return a new array where all strings are in uppercase.  
const strings = ["hello", "world", "javascript", "is", "awesome"];
const upperCaseStrings = strings.map(string => string.toUpperCase());
// console.log(upperCaseStrings);
// 9. Check if an object is empty (has no keys).  
const obj = {};
// console.log(Object.keys(obj).length === 0);

// 10. Create an array of numbers and double each value using .map().  

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map(item => item * 2)

// console.log(double)


// 11. Convert an array of strings into a single comma-separated string. 
const stringArray = ["apple", "banana", "cherry"];
const commaSeparatedString = stringArray.join();
// console.log(commaSeparatedString);


// 12. Write a function to flatten a nested array (one level deep). (e.g., [1, [2, 3], 4] → [1, 2, 3, 4]) 

const flattenArray = (arr) => {
    return arr.flat();
}
// console.log(flattenArray([1, [2, 3], 4]));

const deepArr = [1, [2, [3, [4, [5]]]]];
// console.log(deepArr.flat(Infinity))


// 13. Write a function that checks if all elements in an array are numbers.
const bothValue = [10, 20, 30, 40]
const areAllNumbers = (arr) => {
    return bothValue.every(item => typeof item === 'number');

}
// console.log(areAllNumbers([1, 2, 3, 4, "rohit", 5]));



// 14. Build a simple isPrime() function to check if a number is prime. 

const isPrime = (num) => {
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

// console.log(isPrime(10))




// 15. Create a function that removes duplicate values from an array. 


const arrs = [10, 20, 30, 40, 50, 10, 20, 10, 20, 10];

const remo = new Set(arrs)
const result = [...remo]
// console.log(result);

const removeDouble = arrs.filter((item, index) => {
    // console.log()
    return arrs.indexOf(item) === index
    // console.log()
})

// console.log(removeDouble)



// 16. What’s the difference between parseInt and Number()?

// console.log(parseInt("10.922nm..sss"));
// console.log(Number("555.57lm,"))

// 17. Why does 0.1 + 0.2 !== 0.3 in JavaScript?
const sum = 0.1 + 0.2;
// console.log(sum);

// 18. Explain floating-point precision issues in JavaScript.
const num1 = 0.1;
const num2 = 0.2;
const addFloatNUm = num1 + num2;
// console.log(addFloatNUm);

// 19. How would you handle high-precision decimal math in JS?
const highPrecisionMath = (num1, num2) => {
    return (num1 * 100 + num2 * 100) / 100;
}
// 20. What is the difference between slice and splice?
const arrData = [1, 2, 3, 4, 5];
const slicedArray = arrData.slice(1, 3); // Returns a shallow copy of a portion of an array
// console.log(slicedArray);
const spllicedArray = arrData.splice(1, 2) // Changes the contents of an array by removing or replacing existing elements and/or adding new elements
// console.log(spllicedArray);
// console.log(arrData); // Original array is modified

// 21. Create a function that reverse each word of a given sentence. E.g., Mai hun manas → sanam nuh iam

const reverseString = (word) => {
    let reverseStr = ""
    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word[i])
        reverseStr += word[i]
    }
    return reverseStr
}
// string method using 
const reverseStr = (word) => {
    return word.split("").reverse().join("")

}

// console.log(reverseString("Hello"))
// console.log(reverseStr("rohit"))

const arrNumStr = [10, 20, 30, 40, "rohit", "mohit", "kumar", "sumit"]

// const numstrValue = arrNumStr.map((item) => {
//     return item.toString().split("").reverse().join("")
// })

// console.log(numstrValue)

// 22. In an array of numbers and strings, only add those numbers which are not strings.

const mixedArray = [10, "rohit", 20, "sumit", 30, "40", 50];
let sumMixedArray = 0;

mixedArray.forEach((item, index) => {
    if (typeof item == "number") {
        sumMixedArray += item;
    }
})

console.log(sumMixedArray)

// 23. How would you check if a number is an integer? 

const integerNum = (num) => Number.isInteger(num)

console.log(integerNum(320))


// 24. Write a JavaScript function that reverse a number. 

function reverseNumArray(arr) {
    return arr.toString().split("").reverse().join("")
}

console.log(reverseNumArray(55))



// 25. Write a javascript function that returns a passed string with letters in alphabetical order.

const alphabetical = (str) => {
    let convertNum = str.split("")
    return convertNum.sort().join("")
}

// console.log(alphabetical("efceds"))

// 26. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

const firstLetterUpper = (str) => {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    // console.log(news)
    // .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(firstLetterUpper(`rohit  verma  kumar  singh  sharma`));

// 27. Write a javascript function to get the first element of an array. Passing a parameter ‘n’ will return the first ‘n’ elements of the array.



// 28. Write a javascript function to get the number of occurrences of each letter in specified string.
// 29. write a javascript program to find the most frequent item of an array.
// 30. write a javascript program to shuffle an array. 