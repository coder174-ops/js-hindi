var c=400;
let a=600
if (true) {
    let a=10;
    const b=20;
    var c=30;
    // console.log("INNER:",a);
     
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Neeraj"

    function two(){
        const website="youtube";
        console.log(username);
    }
    // console.log(website);
    // two();
}
// one();

if (true) {
     const username="Neeraj"
     if (username==="Neeraj") {
        const website=" youtube"
        // console.log(username+website);
        }
        // console.log(website);
        
}
// console.log(username);

// console.log(addone(5)); //THIS IS WRITE WAY TO CALL THE FUNCTION
function addone(num){
    return num+1;
}


const addTwo=function(num1){
    return num1+2;
}
// console.log(addTwo(5)); //IT IS ALSO WRITE WAY TO CALL THE FUNCTION




