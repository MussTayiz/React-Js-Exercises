/* setTimeout(() => {
    console.log(`Merhaba`)
}, 3000)

setInterval( () => {
    console.log("Her saniye calisir.")
}, 1000) */

/* const sayHi = (cb) => {
    cb()
}
sayHi( () => { console.log("Hello")}) */

import fetch from "node-fetch"

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => response.json())
.then((users) => {
    console.log("Users", users)
}) */
// asyn await daha duzenli calisiyor

async function getData(){
    const todos1 = (
        await fetch("https://jsonplaceholder.typicode.com/todos/1")
    ).json()
    
    const todos2 = (
        await fetch("https://jsonplaceholder.typicode.com/todos/2")
    ).json()

    console.log("Todos 1", todos1)
    console.log("Todos 2", todos2)
}

//getData()

// anonim fonksiyon

(async () => {
    const todos3 = await (
        await fetch("https://jsonplaceholder.typicode.com/todos/3")
    ).json()

    console.log("Todos 3", todos3)
})();