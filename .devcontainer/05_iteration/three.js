//for of

let myarr=[1,2,3,4,5,6]
for (const num of myarr) {
    console.log(`my position is ${num}`)
}

let greeting="Hello world"
for (const greet of greeting) {
    console.log(greet);//
}

const map = new Map();
map.set("ind","India")
map.set("USA","United state of america")
map.set("fr","France")

console.log(map);//

for (const [key,value] of map) {
    //console.log(key ,':-',value )
}

const myobject={
    game:"NFS",
    study:"MATHS"
}
for (const [key,value] of myobject) {
    console.log(key ,':-',value )
}