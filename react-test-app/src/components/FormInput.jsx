import React, { useState } from "react";

function FormInput(props) {
  const { label, errorMessage, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col">
      <label className="text-xl">{label}</label>
      <input
        className="input border-solid border-2 border-gray-500 px-1 rounded-xs"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      ></input>
      <p className="hidden text-red-700 text-sm">{errorMessage}</p>
    </div>
  );
}

export default FormInput;
