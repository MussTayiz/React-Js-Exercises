import './App.css';
import { useState } from 'react'

import ComponentUnmount from './components/ComponentUnmount'
import ContactListApp from './components/ContactListApp'

function App(){
  const [isVisible, setIsVisible] = useState(false)
  return(
    <>
    <ContactListApp />
    {
    isVisible && 
      <ComponentUnmount />
    }
    <button onClick={() => setIsVisible(!isVisible)}>Togle Counter</button>
    </>
  )
}

export default App;