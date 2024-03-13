
function stringHandsOn(){
    var string = "   Hey you are doing good, keep it up   ";
    console.log("========Question-1=========");
    console.log(`Given a string :${string}`);
    console.log("========Question-2=========");
    console.log(`length of the string: ${string.length}`);
    console.log("========Question-3=========");
    var trim = string.trim();
    console.log(`Removing extra space: ${trim}, length: ${trim.length}`);
    console.log("========Question-4=========");
    console.log(`Total number extra spaces: ${trim.split(" ").length-1}`);
    console.log("========Question-5=========");
    console.log(`The first and last character on the same line: ${trim.charAt(0)} and ${trim.charAt(33)}`);
    console.log("========Question-6=========");
    console.log(`The total words available in the string: ${trim.split(" ").length}`);
    console.log("========Question-7=========");
    console.log(`The index of words: ${string.indexOf("good")}`);
    console.log("========Question-8=========");
    console.log(`The substring of starting : ${string.substring(22,40)}`);
    console.log("========Question-9=========");
    console.log(`Check if string is end with up: ${trim.endsWith("up")}`);
    console.log("========Question-10=========");
    console.log(`Check the string start with: ${trim.startsWith("Hey")}`);
}
stringHandsOn();
