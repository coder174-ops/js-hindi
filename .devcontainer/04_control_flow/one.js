//if

// const temperture=42;
// if(temperture==42){
//    console.log("temp. is less than 50");
// }
// else{
//     console.log("temp. is greater than 50");
// }
// console.log("Execute");

//< , > ,<= ,>= ,!= ,=== ,!==

//BLOCK CODE

// const score=400;

// if(score>300){
//     let power="fly"
//     console.log(`User power:${power}`);
// }
// console.log(`User power:${power}`)

const balance=1000
// if(balance>300)console.log("test"),console.log("test2")

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1000");
    
// }

const UserLoggedIn=true;
const debitCard=true;
const UserLoggedInByEmail=true
const UserLoggedInByGoogle=true

if(UserLoggedIn && debitCard){
    console.log("you can purchase the goods");
}
if(UserLoggedInByEmail || UserLoggedInByGoogle){
    console.log("User is LoggedIn");
}
