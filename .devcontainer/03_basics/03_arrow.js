const user={
    username:"Neeraj",
    price:200,
    usermessage:function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}
// user.usermessage();
// user.username="sam";
// user.usermessage();

// console.log(this);

// function chai() {
//     let username="Neeeraj"
//     console.log(this.username)
// }
// chai()

// const chai=function(){
//     let username="Neeeraj"
//     console.log(this.username)
// }


const chai=()=>{
    let username="Neeraj"
    console.log(this)
}
// chai();

// const addTwo=(num1,num2)=>{
//     return num1 + num2;  // EXPICIT RETURN
// }

// const addTwo=(num1,num2)=> num1 + num2;

// const addTwo=(num1,num2)=> (num1 + num2);//IMPLICT RETURN mai return nahi likhna padega

const addTwo=(num1,num2)=>({username:"neeraj"})
console.log(addTwo(3,4));

