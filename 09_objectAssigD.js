let professor = {
    name:"Pruthviraj",
    city:"Nanded",
    Pin: 431801,
    college: "Yashwant College",
    salary: 100000,
    degrees: {
        engineering : "CSC",
        PHD: "Adv Computing",
    },
    certificate : ["Hacker Rank Participation","Certificate in IFE course", "Certificate in Adv Programming"]

}
console.log("===============Add minimum 5 properties============");
console.log(professor);
console.log("===============Also include nested object 'degree'============");
console.log(professor.degrees);
console.log("===============Also add onr array ============");
console.log(professor.certificate);
professor.totalExperience = "14 years";
console.log("===============Try to add new properties============");
console.log(professor.totalExperience);
console.log("===============Add one new certificate at the 2nd index============");
professor.certificate.splice(2,0,"Oracle Certificate");
console.log(professor.certificate);
let last = professor.certificate.pop();
console.log(`The last element of the array: ${last}`);
const completeObj = professor;
console.log("===============Complete object ============");
console.log(completeObj);
console.log("===============Traverse Array============");
let arr = professor.certificate;
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);  
}
