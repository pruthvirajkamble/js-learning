
function squareOfWordLength(n1,n2,n3){
    var len1 = n1.length;
    var len2 = n2.length;
    var len3 = n3.length;
    console.log("===============Question-1==============");
    console.log(`The Square length of "JavaScript" is:${len1*len1}`);
    console.log(`The Square length of "Google Chrome" is:${len2*len2}`);
    console.log(`The Square length of "Developer Smart" is:${len3*len3}`);
}
squareOfWordLength("JavaScript","Google Chrome","Developer Smart")

function simpleFunction(){
    var str = "I am Angular Developer";
    var len4 = str.length;
    var spl = str.split(" ");
    var len5 = spl.length;
    console.log("===============Question-2==============");
    console.log(`The string length divided by total words: ${len4/len5}`);
    console.log(`The string length multiply by total words: ${len4*len5}`);
}
simpleFunction();