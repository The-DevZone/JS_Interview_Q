let a = 10 ;
let b = 20 ;


let c = a * b;
console.log(c)/// write a function multiplication
function multiplication(){
    return a * b
}/console.log(multiplication())///Using Arrow function
let twoMultiple =() =>{
    return a * b
}
console.log(twoMultiple())///Using Multiplication assignment operato/// Multiplicationassignmentoperator
 console.log(a *= b);
// Using for loop
 let arr = [a ,b]
//  console.log(arr)
 for(let i = 0; i <= arr.length - 1  ; i++){
    console.log(arr[0] * arr[1])
    break;
    //  console.log(a * b);
 }