    //const array = [3,9,7,6,19,29,53];
    function isPrime(num) {
      if (num <= 1) {
          return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              return false;
          }
      }
      return true;
  }
  
  function countPrimesInArray(arr) {
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
          if (isPrime(arr[i])) {
              count++;
          }
      }
      return count;
  }
  
  const array = [3, 9, 7, 6, 19, 29, 53];
  console.log("Number of prime numbers in the array:", countPrimesInArray(array));
  
  function spaceCount(sentence){
   let count = 0;
   for(let i = 0;i<sentence.length;i++){
    if (sentence[i]===" "){
      count++;
    }
   }
   return count;
  }
  console.log(`Total number of space:${spaceCount("Revision is the mother of success")}`);
  console.log(`Total number of space:${spaceCount("java script is the language of internet world")}`);

