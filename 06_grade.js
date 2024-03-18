

function gradeCalculation(marks){
    // invalid inputs
    if (marks==null || marks<=0 || isNaN(+marks)) {
        console.log(`Invalid input: ${marks}`);
    } 
    else if(marks >= 90){
        console.log(`========question-a=========`);
        console.log(`Fantastic marks: ${marks}, Your grade is A+`);
    }
    else if(marks>=75 && marks<90){
        console.log(`========question-b=========`);
        console.log(`Excellent marks: ${marks}, your grade is A`);
    }
    else if(marks>=50 && marks<75){
        console.log(`========question-c=========`);
        console.log(`Good marks : ${marks}, your grade is B`);
    }
    else if(marks>=35 && marks < 50){
        console.log(`========question-d=========`);
        console.log(`Marks is: ${marks}, your grade is C, Need improvement`);
    }
    else if(marks==0 || marks<0 || marks>100 || isNaN(+marks)){
        console.log(`========question-e=========`);
        console.log(`Please provide the valid marks`);
    }
    // else {
    //     console.log(`Valid input : ${marks}`);   
    // }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
// gradeCalculation("Seventy"); // NaN
// gradeCalculation("70"); // 70
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);