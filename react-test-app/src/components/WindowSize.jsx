import { useEffect, useState } from "react";
import Heading2 from "./Heading2";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <section className="flex flex-col justify-center items-center h-64">
      <Heading2>Window Size</Heading2>
      <p>{width}</p>
      <p>{height}</p>
    </section>
  );
}

export default WindowSize;
