class Student {
    constructor(rollNumber,name,division){
        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;

    }
    getDetails(){
        console.log(`Student Details=> Roll Number:${this.rollNumber}, Name:${this.name}, Division:${this.division}`);

    }
}
const Pruthviraj = new Student(20,"Pruthviraj","A");
Pruthviraj.getDetails();
const Pratik = new Student(21,"Pratik","B");
Pratik.getDetails();
const Pavan = new Student(25,"Pavan","C");
Pavan.getDetails();