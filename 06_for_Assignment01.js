var output = "";
console.log(`1.WAP to print number from 5 to 15 by incrementing 1`);
for (var index = 5; index < 16; index++) {
    console.log(`${index}`);
}

console.log(`2.WAP to print number from 50 to 40 by decrementing 1`);
for (var index = 50; index >40; index--) {
    console.log(`${index}`);
}

console.log(`3.WAP to find 15 odd number`);
var count =0;
for (var index = 1; count < 15; index+=2) {
    console.log(`${index}`);
    count++;
}

console.log(`4.WAP to find 10 even number`);
var count =0;
for (var index = 0; count < 10; index+=2) {
    console.log(`${index}`);
    count++;
}

console.log(`5.WAP to print table 5`);
for (var index = 1; index <=10; index++) {
    var result = 5*index
    console.log(`${result}`);
}

console.log(`6.WAP to print table 10`);
for (var index = 1; index <=10; index++) {
    var result = 10*index
    console.log(`${result}`);
}

console.log(`7.WAP to print table 10 in reverse order`);
for (var index = 10; index >=1; index--) {
    var result = 10*index
    console.log(`${result}`);
}




