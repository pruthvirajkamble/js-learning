
console.log("====================Two function with no arg and no return=======================");
console.log("============ Question_1===================");
function first(){
    console.log("My Name is Pruthviraj");
}
first();

function fev(){
    console.log("my fev color is black");
}
fev();

console.log("====================Write a function with arg=======================");
console.log("============ Question_2===================");

function personalDetails(firstName, lastName, collegeName){
    console.log("Argument: ",firstName,lastName,collegeName);
   
}
personalDetails("Pruthviraj", "kamble", "IIITDharwad")

console.log("====================Write a function with two arg=======================");
console.log("============ Question_3===================");

function swapValues(num1,num2){
    console.log("swap value:",num1,num2);
    var temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("Swaping the two value:",num1,num2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("====================Write a function with three arg=======================");
console.log("============ Question_4===================");

function addThreeValue(n1,n2,n3){
   console.log("Numbers are:",n1,n2,n3);
   var add = n1+n2+n3;
   console.log("Adding the value:",add);
}
addThreeValue(10.23,600,40);
addThreeValue("Hello", " Good"," Morning");