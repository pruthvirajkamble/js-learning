var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is: ${fruits_seasonal}`);
console.log(`First element is: ${fruits_seasonal.shift()}`);
console.log(`Last element is: ${fruits_seasonal.pop()}`);
console.log(`Remaining array is: ${fruits_seasonal}`);
console.log("=======================================================");

var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log("===========================================");
console.log(`remove mango from the array: ${fruits_seasonal.splice(4,1)}`);
console.log(fruits_seasonal);

console.log("===========================================");
console.log(`Add element or insert an element pineapple at the last position:`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log("===========================================");
console.log(`add element from the array: ${fruits_seasonal.splice(4,0,"Dragon fruit")}`);
console.log(fruits_seasonal);

console.log("===========================================");
console.log(`replace element from the array: ${fruits_seasonal.splice(2,1,"Kiwi")}`);
console.log(fruits_seasonal);

console.log("===========================================");
for (let index = 1; index <=4; index++) {
    const element = fruits_seasonal[index];
    console.log(element);
    
}

console.log("===========================================");
for (let index = 4; index <=fruits_seasonal.length-1; index++) {
    const element = fruits_seasonal[index];
    console.log(element);
    
}

//console.log(`last Three element: ${fruits_seasonal.splice(fruits_seasonal-3)}`);
//console.log(fruits_seasonal);




