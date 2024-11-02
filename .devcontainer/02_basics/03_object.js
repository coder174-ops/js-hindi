//singletons
//neeraj.man;

//objects  literals 

const mysym=Symbol("Key1")

const JsUser={
    name:"Neeraj",
    age:21,
    [mysym]: "MySymkey1",
    location: "ballia",
    email: "neerajuiet2023@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym])

JsUser.email="neeraj@jnvgmail.com";
// Object.freeze(JsUser)
JsUser.email= "neeraj@chatgptgmail.com";
// console.log(JsUser);

JsUser.greetings =function(){
    console.log("Hello js User");
}

JsUser.greetingsTwo=function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
