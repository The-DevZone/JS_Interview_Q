

// 1. Create a function that returns the last element of an array.
// solve-1 /
function lastElement(arr){
    if(arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}

// console.log(lastElement([1, 2, 3, 4, 5,10, 20, 30, 40, 50])); // Output: 50


// 2. Find the combination of two arrays.
// solve -2
function combination(arr1 ,arr2){
    return [...arr1, ...arr2];
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = []
// console.log(combination(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

for(let i = 0 ; i <arr1.length; i++){
    arr3.push(arr1[i])
    // console.log(arr3); 
    
}
for(let i = 0 ; i <arr2.length; i++){
    arr3.push(arr2[i])
    // console.log(arr3); 
    
}

console.log(arr3); 


// 3. Generate a random integer between 0 to 18.
function randomInteger() {
    return Math.floor(Math.random() * 19);
    
}

console.log(randomInteger())



// 4. Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values.

const filterStrings = (arr) => {
    return arr.filter(item => typeof item === 'string');
}


console.log(filterStrings([1, 'apple', 2, 'banana', 3, 'cherry'])); 



const contianArray = (arrayValue) => {
    let newArray =[]
    for(let i = 0 ; i < arrayValue.length; i++){
        //  console.log(arrayValue[i])
        if(typeof arrayValue[i] === "number"){
            console.log("enter hua ha");
            newArray.push(arrayValue[i])
        }
    }
    return newArray
}

let arr = [10 ,20,30, "R" , "O" , "H"];
console.log(contianArray(arr))

// 5. Find the maximum number in an array.

const findMax = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    arr.forEach(num => {
        if(num > max){
            max = num;
        }
    })
    return max;
}

console.log(findMax([ 5 , 10 , 50 , 50 , 50 , 60])); // Output: null


// 6. Write a function that returns the length of a given object (number of keys).

const objectLength = (obj) =>{
    if(typeof obj !== 'object' || obj === null) {
        return 0;
    }
    return Object.keys(obj).length;
}
console.log(objectLength({name: 'John', age: 30, city: 'New York'})); // Output: 3


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

console.log(filterMale); 