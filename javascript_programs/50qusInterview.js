// 1. Create a function that returns the last element of an array.
// 2. Find the combination of two arrays.
// 3. Generate a random integer between 0 to 18.
// 4. Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values.
// 5. Find the maximum number in an array.
// 6. Write a function that returns the length of a given object (number of keys).
// 7. In an array of objects filter out those objects which have gender's value male.


// solve-1 /
function lastElement(arr){
    if(arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}

console.log(lastElement([1, 2, 3, 4, 5,10, 20, 30, 40, 50])); // Output: 50