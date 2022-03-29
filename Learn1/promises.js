import axios from 'axios'

async function getData(){
    const users = await axios('https://jsonplaceholder.typicode.com/users')
    const { data: users_data } =  users
    console.log(users_data)
}
//getData()

const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if(number == 1 )
            resolve('comments')
        reject('Bir hata olustu !')    
    })
}

getComments(2).then((data) => {console.log(data)})
.catch((e) => console.log('Error', e))

const getPost = ((post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id)

        resolve(data)
    })
})

getPost(1)
.then((data) => { console.log(data) })
.catch((e) => { console.log(e) })

Promise.all([promise1, promise2])
.then(console.log) // boyle bir kullanimda var gibi
.catch((error) => console.log("reject ciktilari"))