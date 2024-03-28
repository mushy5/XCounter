import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (num)=>{
    setCount((prevCount)=>prevCount+num);
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={()=>{handleClick(1)}}>Increment</button>
      <button onClick={()=>{handleClick(-1)}}>Decrement</button>

    </div>
  );
}

export default App;
