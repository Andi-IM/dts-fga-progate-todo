import {useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
