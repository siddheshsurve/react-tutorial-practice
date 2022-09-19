import { useState } from "react"; 
import "./index.css"
const App = () => {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="AppParent">
        <div className="App">
          <button>-</button>
          <h1>{counter}</h1>
          <button>+</button>
        </div>
      </div>
    </>
  )
}

export default App;