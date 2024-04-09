console.log("==========1.a No args and no return value=======");
let noArgs = ()=>{
 console.log(`Good Morning, Today is Monday`);
}
noArgs();
console.log("==========2.a 3args and no return value=======");
let multiplication = (n1,n2,n3=1)=>{
    let ans = n1*n2*n3;
    console.log(`parameters perform the multiplication: ${ans}`);
}
multiplication(5,5,2)
console.log("==========2.b 2args or assign default value to 3rd arg and no return value=======");
multiplication(10,4)

console.log("==========3.a 5args and return value=======");
let addition = (num1,num2,num3,num4,num5)=>{
  let result = num1+num2+num3+num4+num5;
  return result;
}
let returnAddition = addition(100,100,200,349,756);
console.log(`addition of 100,100,200,349,756 is: ${returnAddition}`);
console.log("==========3.c 5args and return value=======");
let value = addition("I am ","learning ","ES6 ","features ","in depth")
console.log(`returning the addition value: ${value}`);
