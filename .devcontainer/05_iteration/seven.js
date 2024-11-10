//map

const number=[2,6,3,34,23,5,54,57]

// const newnumber=number.map((num)=>{
//      return num+10;
// })
console.log(number);
const newnumber=number
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)
console.log(newnumber);
