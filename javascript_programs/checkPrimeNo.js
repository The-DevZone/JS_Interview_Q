let a, b, i, j;
a = 5;
b = 27;
if (a <= 2) {
    a = 2;
    if (b >= 2) {
        console.log(a);
        a++;
    }
}

// Make sure that a is odd before
// we begin the loop
if (a % 2 == 0)
    a++;

// Note: We traverse through odd numbers only
for (i = a; i <= b; i = i + 2) {

    // flag variable to tell
    // if i is prime or not
    let flag = 1;

    // Traverse till square root of j
    // (Largest possible value of a prime factor)
    for (j = 2; j * j <= i; ++j) {
        if (i % j == 0) {
            flag = 0;
            break;
        }
    }

    // flag = 1 means i is prime
    // and flag = 0 means i is not prime

    if (flag == 1) {
        if (i == 1) continue;
        else
            console.log(i);
    }
}