//Prime Numbers
let primeNumbersList = []
for (let i=1;i<1000;i+=2){
  let count = 0
  for(let j=3;j<i;j++){
    if(i % j == 0){
      count++;
    }
   }
  if (count ==0){
    primeNumbersList.push(i)
  }
  else if(i == 2){
    primeNumbersList.push(2);
  }
}
console.log(primeNumbersList)

//Perfect Numbers
for(let t=1;t<1000;t++){
let count2 = 0;
for (let k=0;k<t;k++){
  if(t % k == 0){
    count2 += k;
  }
}
if (count2==t){
  console.log(t)
}
}

//Amicable Numbers
let amicableNumbers = function(param1=220,param2=284){
  let count = 0;
  let count1 = 0;
  for (let s=1;s<param1;s++){
    if(param1 % s == 0){
      count += s
    }
  }
  for(let d=1;d<param2;d++){
    if(param2 % d == 0){
      count1 += d
    }
  }
  if ((count1 == param1) && (count == param2)){
    console.log("Amicable Numbers")
  }
}
amicableNumbers(220,284)

//Array Prime Numbers
let findPrime = function(...numbers) {
  for(let i=0;i<numbers.length;i++){
      let counts = 0
      for(let p=2;p<numbers[i];p++){
        if(numbers[i] % p == 0){
          counts++
        }
      }
     if (counts == 0){
       console.log(numbers[i] + " Is a prime number.")
     }else{
       console.log(numbers[i] + " Is not a prime number.")
     }
    
  }
}
findPrime(2, 5, 8, 21, 13)
findPrime(3, 5)
