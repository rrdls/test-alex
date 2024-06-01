import { useState } from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0);

  function increase(){
    setCounter(counter + 1)
  }

  function decrease(){
    setCounter(counter - 1)
  }

  return (
     <div>
      <h1 className="title">{counter}</h1>

      <button onClick={increase} >Increase +</button>
      <button onClick={decrease} >Decrease -</button>
     </div>
  )
}

export default App
