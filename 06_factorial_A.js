function factorialOfNum(n1){
    let fact = 1;
    for (i = 1; i <= n1; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${n1} is ${fact}.`);
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);