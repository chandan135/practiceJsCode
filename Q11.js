/*
  11.print your name like this
a
an
anu
anup
anupa
anupam
*/

//Code:
let s="anupam";
let sLength=s.length;
for(i=0;i<sLength;i++){
  str="";
  for(j=0;j<=i;j++){
    str=str+s[j]
    }
  console.log(str);
  //console.log("\n");
}
