import React from 'react';
import { useState } from 'react';
import Header from './components/Header'
import User from './components/User'

const name = "Mehmet"
const surname = "Ahmet"
const isLoggedIn = false
function FirstAppJsLessons() {
    const [price, setPrice] = useState(15)
    const [friends, setFriends] = useState(["ali", "veli", "ahmet"])
    const [address, setAddress] = useState({title: "Van", zip: 65100})
    const [count, setCount] = useState(0)
    const decrease = () => {
      setCount(count - 1)
    }
    return(
  
      
      <>
        <h1>State</h1>
        <h1>Counter</h1>
        <h2>Counter is {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        {/* setInterval(() => {
          setCount(count + 1)
        }, 1000) */}
        <br/>
        <h2>Price is {price}</h2>
        <button onClick={() => setPrice(65)}>Click</button>
        <br/>
        <h1>Friends</h1>
        {friends.map((friend, index) => 
          <p key={index}>{friend}</p>
          )}
        <button onClick={() => setFriends([...friends, "ayse"])}>Add Friend</button>
        <br/>
        <br/>
        <br/>
        <h1>Address</h1>
        {address.title} {address.zip}
        <button onClick={() => setAddress({title: "Van2", zip: 651200})}>change address</button>
        <br/><br/>
  
  
        {name} {surname}
        <br />
        {`Adim ${name} soyadim ${surname}`}
        <br />
  
        { isLoggedIn && "Giris basarili..." }
        { !isLoggedIn && "Giris basarisiz..." }
  
        { isLoggedIn ? "True": "False" }
        <h2>User Component</h2>
        <User name='Isim' surname='Soyisim' age={14} isLoggedIn={true} 
        friends={["A","B","C","D","E"]}
        address={{
          title: "Tusba",
          zip: 65000
        }} />
  
        
  
      </>
  )
}

export default FirstAppJsLessons;
