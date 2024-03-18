
console.log("========================Step-1=========================");
function greaterNumber(n1, n2){
   
   var num = n1>n2?n1:n2;
   console.log(`The greatest number is: ${num}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("========================Step-2=========================");

function isEvenOrOddNum(n1){
    var val = n1%2==0?"True":"False";
    console.log(`Finding the even and odd number: ${val}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("========================Step-3=========================");
function wordLength(num1){
  var len = num1.length;
  var result = len%2==0?"EVEN":"ODD";
  console.log(`The word length is:${len} and its:${result}`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");








