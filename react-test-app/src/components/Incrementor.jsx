import Button from "./Button";
import React, { useState } from "react";

function Incrementor() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  return (
    <section className="text-center flex flex-col">
      <Button color="blue" onClick={incrementCount}>
        +1
      </Button>
      <Button onClick={resetCount}>0</Button>
      <Button onClick={decrementCount}>-1</Button>
      <p className="w-40 h-15 bg-amber-500 text-white rounded-md flex items-center justify-center font-mono text-xl">
        Count: {count}
      </p>
    </section>
  );
}

export default Incrementor;
