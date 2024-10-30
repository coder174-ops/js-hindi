//dates

// let MyDate=new Date();
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleString());
// console.log(typeof MyDate);

let MyCreateDate=new Date ("01-14-2023");
// console.log(MyCreateDate.toDateString());
// console.log(MyCreateDate.toLocaleString());

let MyTimeStamp=Date.now();
// console.log(MyTimeStamp);
// console.log(MyCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${newDate.getDay()}and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})









