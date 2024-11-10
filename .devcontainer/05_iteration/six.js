const coding=["js","c++","ruby","swift"]

const values=coding.forEach((item)=>{//forEach do not return values
// console.log(item)
return item;
})

// console.log(values);

//filter
const nums=[1,2,3,4,5,6,7,8,9,10]
// const myprint=nums.filter((nums)=>{
//    return nums>4;
// })

const myprint=[]
nums.forEach((num)=>{
    if (num>4) {
        // myprint.push(num)
    }
})
// console.log(myprint)

const book=[
    {
    title:'book one',genre:'history',publish:2000,edition:2010
},
{
    title:'book two',genre:'Science',publish:1998,edition:2014
},
{
    title:'book third',genre:'history',publish:1980,edition:2013
},
{
    title:'book four',genre:'non-fiction',publish:1985,edition:2019
},
{
    title:'book fifth',genre:'fiction',publish:2004,edition:2024
},
{
    title:'book sixth',genre:'history',publish:2004,edition:2024
},
]
const UserBooks=book.filter((bk)=>{
    return bk.genre==="history" && bk.publish>1995;
})
console.log(UserBooks);
