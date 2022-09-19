import { useState, useEffect } from "react"; 
import "./index.css"
const App = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, [])

  return (
    <>
      <div className="AppParent">
        <div className="App">
          <button onClick={ () => setCounter((prevCount) => prevCount-1)}>-</button>
          <h1>{counter}</h1>
          <button onClick={ () => setCounter((prevCount) => prevCount+1)}>+</button>
        </div>
      </div>
    </>
  )
}

export default App;