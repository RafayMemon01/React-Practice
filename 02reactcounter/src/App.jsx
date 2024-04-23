import { useState } from 'react'
import './App.css'

const App= () => {
  const [count, setCount] = useState(0)

  const increment = () => {
   if (count < 20) {
      setCount(count + 1)
    } {
    
   }
  } 
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
    
  
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App
