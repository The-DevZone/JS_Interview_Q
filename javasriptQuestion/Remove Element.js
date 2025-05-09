let arr = [1, 2, 3, 4, 5];
let removeValue = 3;
let position = arr.indexOf(removeValue);

if(position !== -1) {
    arr.splice(position, 1);
    console.log(arr);  // [1, 2, 4, 5]
}

