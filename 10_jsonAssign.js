const person = `
{
    "name": "Aleix Melon",
    "id": "E00245",
    "role":["Dev","DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address":{
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`
const personObject = JSON.parse(person);
console.log(personObject);
console.log(personObject.role[0]);
let result = personObject.name.split(" ");
console.log(result[1]);
let ans = personObject.doj.split("-")
console.log(ans[2]);

