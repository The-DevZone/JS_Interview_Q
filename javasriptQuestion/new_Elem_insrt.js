let a = [10, 20, 30, 40];
let e = 50;
a.unshift(e);
console.log(a); // [50, 10, 20, 30, 40]

let b = [10, 20, 30, 40];
let f = 50;
b.push(f);
console.log(b); // [10, 20, 30, 40, 50]

let c = [10, 20, 30, 40];
let g = 50;
c.splice(2, 0, g);
console.log(c); // [10, 20, 50, 30, 40]

let d = [10, 20, 30, 40];
let h = 50;
d.splice(2, 1, h);
console.log(d); // [10, 20, 50, 30, 40]

let arr = [1, 2, 4, 5];
let insertValue = 3;
let position = 2;

for (let i = arr.length; i > position; i--) {
  arr[i] = arr[i - 1];
}
arr[position] = insertValue;

console.log(arr); // [1, 2, 3, 4, 5]
