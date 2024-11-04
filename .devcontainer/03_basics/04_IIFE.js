//immediately invoked function expression 
// (function chai(){
//     console.log(`morning tea`);
// })();

// (function Aurchai(){   //NAMED IIFE
//     console.log(`Evening tea`);
// })()


//Also we write the syntax using Arrow function
((name)=>{  //UNNAMED IIFE
    console.log(`Evening tea ${name}`);
})("Mast!")
