/*
12.arr=[1,2,2,3,3,4,4,4]
print the unique numbers in the array
*/

//Code:


const arr = [1,2,2,3,3,4,4,4]
const a= new Set()
for(let i of arr){
  a.add(i);
}
//console.log(a.size)
let newArray=[]
for(let j of a){
  newArray.push(j);
}
console.log(newArray)


