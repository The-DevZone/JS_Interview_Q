let arr = [1, 20, 30, 4, 5, 6, 10 ,20 , 30];

let newArray = new Set(arr);
let result = [...newArray];
// console.log(result);

let arr2 = [1, 20, 30, 4, 5, 6, 10 ,20 , 30];
let result2 = arr2.filter((item , index)=>{
    return arr2.indexOf(item) === index;

})
// console.log(result2);

let arr3 = [1, 20, 30, 4, 5, 6, 10 ,20 , 30];
let appendArray =[]
 arr3.forEach(item =>{
    if(!arr3.includes(item)){
        appendArray.push(item);
    }
}) 

console.log(arr3);
