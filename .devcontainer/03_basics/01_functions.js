function sayMyName(){
console.log("N");
console.log("I");
console.log("R");
console.log("A");
console.log("J");
}
//sayMyName();  REFERENCE+EXECUTION

// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){//parameters
    // let result=number1+number2;
    // return result;
    return number1+number2;
}

const result=addTwoNumbers(4,7);//argument
// console.log("result:",result);

function loginUserMessage(username="sam"){ //By defaut parameter
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged In`

}
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,300,2000));

const user={
    name:"Neeraj Verma",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
    username:"sam",
    price:299
})

const myNewArrray=[122,300,500,400]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArrray));
console.log(returnSecondValue([200,400,300,500]));









