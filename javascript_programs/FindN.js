function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum = sum + i;
    return sum;
}

// Driver code
const y = 5;
console.log(findSum(y));

function findSum(n) {
    if (n !== 0)
        return n + findSum(n - 1);
    else
        return n;
}

// Driver code
const x = 5;
console.log(findSum(x));

function findSum(n) {
    return n * (n + 1) / 2;
}

// Driver code
const n = 5;
console.log(findSum(n));