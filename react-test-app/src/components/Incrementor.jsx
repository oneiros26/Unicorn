import Button from "./Button";
import React, { useState } from "react";

function Incrementor() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };
  const decrementCount = () => {
    setCount((c) => c - 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  return (
    <section className="text-center flex flex-col h-64 justify-end">
      <Button onClick={incrementCount} delay1={true}>
        +1
      </Button>
      <Button onClick={resetCount} delay2={true}>
        reset
      </Button>
      <Button onClick={decrementCount}>-1</Button>
      <p className="w-40 h-15 bg-amber-500 text-white rounded-md flex items-center justify-center text-xl">
        Count: {count}
      </p>
    </section>
  );
}

export default Incrementor;
