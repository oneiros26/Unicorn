import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#7570ff");

  function handleColorChange(e) {
    setColor(e.target.value);
    const colorDisplay = document.getElementById("color-display");
    colorDisplay.classList.toggle("rotate-360");
  }

  return (
    <section className="flex flex-col justify-between items-center h-64">
      <h1 className="text-4xl font-bold">Color Picker</h1>
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
    </section>
  );
}

export default ColorPicker;
