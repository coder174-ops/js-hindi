//forin

const myobject={
    js:"javascript",
    rb:"ruby",
    cpp:"c++",
    swift:"swift on apple"
}

for (const key in myobject) {
    console.log(`${key} shortcut is ${myobject[key]}`)
}

const programming=["JS","ruby","swift","c++"]
for (const key in programming) {
   console.log(`${key} is position of programming lan. ${programming[key]}`)
}