/*
14.a=[1,2,3,4,5,6]
b=[5,6,7,9,12]
output:-
c=[1,2,3,4,7,9,12]
*/



let a=[1,2,3,4,5,6]
let b=[5,6,7,9,12]

let m=new Map();
let s=0;
for(let i of a){
  if(m.has(i))
    m.delete(i);
  else
    m.set(i,s);
}
for(let i of b){
  if(m.has(i))
    m.delete(i);
  else
    m.set(i,s);
}
//console.log(m)
let c=[]
let keys=m.keys()
//console.log(keys)
for(let i of keys){
  c.push(i);
}
console.log(c)


