let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let str = arr.join(); 
// console.log(str);

let strs = arr.join(" ");
// console.log(strs);

let toStringMethod = arr.toString();
// console.log( typeof st); // string

let stringifyMethod = JSON.stringify(arr);
console.log( stringifyMethod); // string

for (let i = 0; i < arr.length; i++) {
    const result = arr[i];
    console.log(result); // string
    continue;
    break; // This will exit the loop after the first iteration
    // result += ;
}