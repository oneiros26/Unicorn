import React, { useState } from "react";
import Heading2 from "./Heading2";
import DefaultContainer from "./DefaultContainer";

function ColorPicker() {
  const [color, setColor] = useState("#7570ff");

  function handleColorChange(e) {
    setColor(e.target.value);
    const colorDisplay = document.getElementById("color-display");
    colorDisplay.classList.toggle("rotate-360");
  }

  return (
    <DefaultContainer>
      <Heading2>Color Picker</Heading2>
      <p
        id="color-display"
        className="w-36 h-36 rounded-md flex justify-center items-center text-xl font-light duration-250"
        style={{ backgroundColor: color }}
      >
        {color}
      </p>
      <div className="flex flex-row gap-4 items-center">
        <label className="text-xl font-semibold">Select a Color:</label>
        <input
          className="w-12 h-6 rounded-sm"
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </DefaultContainer>
  );
}

export default ColorPicker;
