const users = ["Mehmet", "Ahmet", "Murat"]
const users_obj = [
    {"name": "name2", "age": "15"},
    {"name": "name2", "age": "35"},
    {"name": "name3", "age": "67"},
]
/*
push
map
find
filter
some
every
includes
*/
// Map
//users.push("Ayse")
//console.log(users)

// map
//users_obj.map((item) => { console.log(item.name) })

// find -- ilk buldugunu doner, filter ne kadar varsa doner
/* const findIt = users_obj.find((item) => item.name === 'name2');
console.log(findIt); 
*/
// filter
//const filtered = users_obj.filter(({name, age}) => name === 'name2')
//console.log(filtered) 

// some
//const some_ = users_obj.some(({name, age}) => name === "name2");
//console.log(some_);

// every -- dizideki butun elemanlarin sarti saglamasi gerekiyor
const every = users_obj.every((item) => item.age > 4)
console.log(every);

const fruits = ["apple","banana","chery"]
console.log(fruits.includes("apple"));