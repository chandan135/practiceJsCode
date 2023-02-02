/*
10.let name = ["apple","Bannana","Pears","Milk"];
  let price = [10,20,30,40];
  //output
  {"apple":10,"Bannana":20,"Pears":30,"Milk":40}
*/

//Code:

let arr = ["apple", "Bannana", "Pears", "Milk"];
let price = [10, 20, 30, 40];
let obj = {}
for (i = 0; i < arr.length && i < price.length; i++) {
  obj[arr[i]] = price[i];
}
const myObj = JSON.stringify(obj)
console.log(myObj)

