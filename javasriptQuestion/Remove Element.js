let arr = [1, 2, 3, 4, 5];
let removeValue = 3;
let position = arr.indexOf(removeValue);

// if(position !== -1) {
//     arr.splice(position, 1);
//     console.log(arr);  // [1, 2, 4, 5]
// }

for(let i = position; i < arr.length - 1; i++) {
    // arr[i] = arr[i - 1];
    // console.log("hellow"); // [1, 2, 4, 5, 5]
    if(removeValue == arr[i]) {
        arr[i] = removeValue;
    }
}

console.log(arr); // [1, 2, 4, 5, undefined]