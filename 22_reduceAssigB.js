class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
    details(){
        console.log(`Employee=> emp_id:${this.emp_id}, emp_name:${this.emp_name}, emp_dept:${this.emp_dept}, emp_salary:${this.emp_salary},emp_company:${this.emp_company}`);
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50008, "TCS");
const emp_radha = new Employee(33, "Radha", 'RR', 74808, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47080, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75800, "TCS");
const emp_mahi = new Employee(99, "Manesh", "HR", 85000, "Infy");

const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny ,emp_mahi ];

console.log("1. find all employee from wipro company");
const arrayEmp = arrayEmployees.filter( (comName)=>{
    return comName.emp_company=="Wipro";
});

arrayEmp.forEach( (element)=>{
   element.details();
});

console.log("2. find all employee from IT or HR department");
const arrayIt = arrayEmployees.filter( (dept)=>{
   return dept.emp_dept == "IT"|| dept.emp_dept=="HR";
});
arrayIt.forEach( (ele)=>{
    ele.details();
 });

 console.log("3. Find all employee whose emp id's are greater than 50");
 const arrayId = arrayEmployees.filter( (value)=>{
    return value.emp_id >= 50;
 });

 arrayId.forEach((element)=>{
    element.details();
 });

 console.log("4");
 const arrayNameStart = arrayEmployees.filter( (startName)=>{
    return startName.emp_name.startsWith("A") || startName.emp_name.startsWith('V')|| startName.emp_name.startsWith('M');
 });
 arrayNameStart.forEach( (element)=>{
    element.details();
 })

console.log("5");
const sumSalary = arrayEmployees.reduce( (runningTotal, currentValue)=>{
   return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(`Total Salary :${sumSalary}`);
console.log(`Average salary : ${sumSalary/arrayEmployees.length}`);

console.log("6");
const newArray = arrayEmployees.filter((emp)=>{
    return emp.emp_dept=="IT";
});

const sumSalaryIT = newArray.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(sumSalaryIT);
console.log(`Average salary from IT department is: ${sumSalaryIT/newArray.length}`);