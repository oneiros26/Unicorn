import Button from "./Button";
import React, { useState } from "react";

function Incrementor() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <section className="text-center">
      <Button onClick={incrementCount} />
      <p className="w-40 h-15 bg-amber-500 text-white rounded-md flex items-center justify-center font-mono text-xl">
        Count: {count}
      </p>
    </section>
  );
}

export default Incrementor;
