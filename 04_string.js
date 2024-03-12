
var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of chars is:" , totalChars);

var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is: ", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is: ", charAt11);

var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last char is:" , lastChar);

console.log("========== indexOf() ==================");
var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("Index of char M is: ", indexOfM);

console.log("========== concat() ==================");
var firstName = "Pruthviraj";
var lastName= " Kamble";
var resultConcat = firstName.concat(lastName);
console.log("Concat result is:", resultConcat);

console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log(`========== trim() ==================`);
var greet = "  Good Morning  ";
var result = greet.trim();
console.log(`${greet}:after using trim:${result}`);

console.log(`========== includes() ==================`);
var greet = "Good Morning";
var result = greet.includes("Good");
console.log(`its include or not:  ${result}`);

console.log(`========== slice(start,end) ==================`);
var fullName ="Pruthviraj kamble";
var result = fullName.slice(0,15);
console.log(`${fullName} find out chars between given index:${result}`);

