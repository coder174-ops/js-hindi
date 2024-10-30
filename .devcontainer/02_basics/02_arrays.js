const marvel_heroes=["thor","Ironman","spiderman"];
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const AllHeroes = marvel_heroes.concat(dc_heroes);
// console.log(AllHeroes);

const all_new_heroes=[...marvel_heroes,...dc_heroes];

// console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[8,9,[3,5,6]]];
const real_another_array=another_array.flat(Infinity);

// console.log(real_another_array);

// console.log(Array.isArray("Neeraj"));
// console.log(Array.from("Neeraj"));
// console.log(Array.from({name:"Neeraj"}));//very imp

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));

