import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import testcomp from "./components/testcomp.jsx";
import Testcomp from "./components/testcomp.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div>
            <Testcomp/>
        </div>
      <h1 className="text-orange-600">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
