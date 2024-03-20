let str = "I am very good IT Developer";
let count = 0;
const vowels = "aeiou";
for (let i = 0; i < str.length - 1; i++) {
  let ele = str.charAt(i);
  let lower = ele.toLowerCase();
  if (vowels.includes(lower)) {
    count++;
  }
}
console.log(count);
console.log("=================================================");

let n1 = 0;
for (let i = 1; i <= 5; i++) {
  n1 = n1 + i * i * i;
}
console.log(n1);
console.log("========================================");

function oddPositionedChars(word){
    console.log("Odd Positioned Chars");
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if(index%2!=0 && element != " "){
            console.log(element);
        }   
    }

}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon i will be UI IT Champ");
