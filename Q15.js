/*
15.print the sum of squre of each digit of a number(123=1^2+2^2+3^2)
*/


//Code:


let a=123
let r=0
let sum=0
while(a>0){
  r=Number.parseInt(a%10);
  sum=sum+(r*r);
  a=Number.parseInt(a/10);
}
console.log(sum)


