import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="flex flex-col justify-between items-center h-64">
      <h1 className="text-4xl font-bold">Color Picker</h1>
      <p
        className="w-36 h-36 rounded-md flex justify-center items-center text-xl font-light"
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
    </div>
  );
}

export default ColorPicker;
