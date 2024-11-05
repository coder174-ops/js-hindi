// const userEmail=[]
// if (userEmail) {
//     console.log("I got the Email")
// }
// else{
//     console.log("Don't get the email");
// }
//falsy value
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//Truthy Values
//"0",'false'," ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty");
// }

// const emptyObject={}

// if(Object.keys(emptyObject).length===0){
//     console.log("object is empty")
// }

//Nullish coalescing operator(??):null undefined
let val1;
// val1=5??10
// val1=null??10
// val1=undefined ?? 15
val1=null ?? 10 ?? 20

console.log(val1);

//Terniary operator

//condition ? true:false

const iceTeaPrice=100
iceTeaPrice>=80?console.log("Chalo chai pite hai!"):console.log("aaj chai nahi pina")

