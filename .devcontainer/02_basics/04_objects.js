//Singleton
//const tinderUser=new Object();

const tinderUser={};

tinderUser.id="123abc",
tinderUser.name="Sunny",
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser  = {
    email:"some@234gmail.com",
    fullname:{
        userfullname: {
            firstname:"Neeraj",
            lastname: "Verma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

//const obj4={obj1, obj2, obj3}
//const obj4= Object.assign({}, obj1, obj2, obj3)

//SPREAD KAR DO
const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

const users=[
    {
        name:"Neeraj Kumar Verma",
        Address:"Uttar Pradresh"
    },
    {
        name:"Abhinav Jha",
        Address:"Bihar"
    },
    {
        name:"Nitesh Kumar",
        Address:"Bihar"
    }
]
// console.log(users[0].name)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// console.log(course.price);

const {courseInstructor: instructor}= course;

//console.log(courseInstructor);
console.log(instructor);


