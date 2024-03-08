var sweety = "Sweety";
var cutie = "Cutie";

console.log("================Before Swap===============");
console.log("Sweety:", sweety);
console.log("Cutie",cutie);

var temp1 = "Sweety";
var sweety = cutie;
var cutie = temp1;

console.log("================after swap===============");
console.log("Sweety:",sweety);
console.log("Cutie:",cutie);


console.log("=============Swap Three variable==============");
var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("=============Before Swap==================");
console.log("Num1:", num1);
console.log("Num2:", num2);
console.log("Num3:", num3);

var temp1 = num1;
var num1 = num2;
var num2 = num3;
var num3 = temp1;

console.log("==============After Swap===================");
console.log("Num1:", num1);
console.log("Num2:", num2);
console.log("Num3:", num3);