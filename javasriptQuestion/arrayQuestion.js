// // // The Math.random() method is used to get the random number between 0 to 1 (1 exclusive). It can be multiplied with the size of the array to get a random index and access the respective element using their index.

// // let a = [10, 20, 30, 40, 50];

// // const i  = Math.floor(Math.random() * a.length ) ;

// // const r = a[i];
// // console.log(r);

// const arr = [10 , 20 , 40 , 80 ,  80 , 20 , 60 ,40 ];

// arr.sort(( a ,b ) => a -b) 

// console.log(arr)

// const a = new Set(arr ) 

// const b =  [...a]  
// const c = Math.max(...b)

// console.log(c)

// let sum = (function(a,b){
//     return a + b;
// })(10, 20);

function sum(a,b){
    return a + b;
}
console.log(sum(10,20));