console.log("==============1.Create a object bankSbi================");
const bankSbi = {
    bankName : "SBI",
    branch : "Bhokar",
    IFSC : "SBIN0000208",
    pin : 431801  
}

console.log("==============2.Create a object bankLocation===========");
const bankLocation = {
    street : "Nanded",
    city : "Bhokar",
    pin : 431601,
}

console.log(`===== 3.Cloning an Object using Object.assign()======`);
const cloneObjet = Object.assign({}, bankSbi,bankLocation);
console.log(cloneObjet);

console.log("==============4.Create a object rateOfInterest===========");
const rateOfInterest = {
    homeLoanInterest : 5.2,
    personalLoanInt : 7.3,
    dueInterest : 3
}
console.log("============5.Merge the step1,step2 and step3==========");
const mergeObject = Object.assign({},cloneObjet,rateOfInterest);
console.table(mergeObject);

for (const index in mergeObject) {
    console.log(`${index} : ${mergeObject[index]}`);
}