import Button from "./Button";
import React, { useState } from "react";
import DefaultContainer from "./DefaultContainer";

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
    <DefaultContainer test={true}>
      <div className="flex flex-col gap-1">
        <Button onClick={incrementCount} delay1={true}>
          +1
        </Button>
        <Button onClick={resetCount} delay2={true}>
          reset
        </Button>
        <Button onClick={decrementCount}>-1</Button>
      </div>
      <p className="w-40 h-15 bg-amber-500 text-white rounded-md flex items-center justify-center text-xl">
        Count: {count}
      </p>
    </DefaultContainer>
  );
}

export default Incrementor;
