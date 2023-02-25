import { useState } from 'react'
import './App.css'
import Testcomp from "./components/testcomp.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div>
            <Testcomp/>
        </div>
    </div>
  )
}

export default App
