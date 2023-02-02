/*
13.a=[1,2,3,4,5,6]
b=[5,6,7,9,12]
output:-
c=[1,2,3,4,5,6,7,9,12]
*/


//Code:


let a=[1,2,3,4,5,6]
let b=[5,6,7,9,12]
let s=new Set()
for(let i of a){
  s.add(i);
}
for(let j of b){
  s.add(j);
}
//console.log(s)
let c=[]
for(let k of s){
  c.push(k);
}
console.log(c)

