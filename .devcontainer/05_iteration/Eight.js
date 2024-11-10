//Reduce Function 

const nums=[1,2,3]

// const add=nums.reduce((acc,currval)=>{
//     console.log(`accumator ${acc} and currval is ${currval}`)
//    return acc+currval
// },0)

const add=nums.reduce((acc,currval)=>acc+currval,0)
// console.log(add);

const Shopping=[
    {
       itemName:"shoes",
       price:1240
},
{
    itemName:"T-Shirt",
    price:120
},
{
    itemName:"iron",
    price:400
},
{
    itemName:"pant",
    price:1000
},
]

const priceToPay = Shopping.reduce((acc,item) => acc + item.price,0)

console.log(priceToPay);