function isArmstrong(num) {
  const digits = num.toString().split('');
  const order = digits.length;

  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), order);
  }, 0);

  return sum === num;
}

console.log(isArmstrong(153)); 
console.log(isArmstrong(123)); 


function isArmstrong(number) {
    const digits = number.toString().split('');
    const order = digits.length;
    const sum = digits.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit), order), 0);

    if (sum === number) {
        console.log(
            number + " is an Armstrong Number");
    }
    else {
        console.log
            (number + " is not an Armstrong Number");
    }
}

isArmstrong(9474);
isArmstrong(520);


const areaTringle = (base ,height) => {
    return 0.5 * base * height
}

let baseLength = 50;
let heightLength = 5;

let tringle = areaTringle(baseLength , heightLength);
console.log("this is a area of tringle" + tringle);
 
function findLargest(n1, n2, n3){
    if(n1 >= n2 && n1 >= n3){
        return n1;
    }else if(n2 > n1 &&  n2 >= n3){
        return n2;
    }else{
        return n3;
    }
}

console.log(findLargest(10, 20, 50))