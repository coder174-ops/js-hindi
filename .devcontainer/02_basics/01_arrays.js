//Array

const arr=[1,2,3,4,5]
const heroes=["neeraj","Shaktiman"];
const arr2=new Array(1,2,3,4);

// console.log(arr[1]);

//Array methods
// arr.push(6);
// arr.push(7);
// arr.pop();

// arr.unshift(8);
// arr.shift();

// console.log(arr.includes(9));
// console.log(arr.indexOf(4));

const newArr=arr.join();

// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice
console.log("A",arr);

const myn1=arr.slice(1,3);

console.log(myn1);
console.log("B",arr);

const myn2=arr.splice(1,3);

console.log(myn2);
console.log("C",arr);