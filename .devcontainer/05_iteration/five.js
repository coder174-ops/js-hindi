//foreach
const coding=["js","c++","ruby","swift"]

coding.forEach(function (val){//using callback function (in this method you do not use name of function) 
    // console.log(val);
})

coding.forEach((val)=>{//arrow function use,same as above
//  console.log(val);
})

function myprint(val){
//    console.log(val)
}
// coding.forEach(myprint)

const mycoding = [
    {
    filename:"javascript",
    filelocation:"js"
},
{
    filename:"swift",
    filelocation:"swift"
},
{
    filename:"python",
    filelocation:"pyt"
},
]
mycoding.forEach((val)=>{
  console.log(val.filelocation);
})

