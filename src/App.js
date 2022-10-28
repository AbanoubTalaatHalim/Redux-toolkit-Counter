import { useState } from "react";
import Counter from "./Counter";
import Header from "./Header";
import Users from "./Users";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (val) => {
    setCounter(counter + val);
  };
  const handleDecrement = (val) => {
    setCounter(counter - val);
  };

  return (
    <div className="app">
      <Header counter={counter} />

      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <Users />
    </div>
  );
}

export default App;
