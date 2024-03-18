
var voteEligible = function(n1){
    var age = n1;
    if(age==0 || age<0 || age>=130){
        console.log(`In valid data:${age}`);
    }
    else if(age < 18){
        console.log(`Not eligible for vote:${age}`);
    }
    else if(age>=18){
        console.log(`Eligible for vote:${age}`);
    }


}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
