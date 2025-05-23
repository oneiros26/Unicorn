import React, { useState } from "react";

function FormInput(props) {
  const { label, errorMessage, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <>
      <label>{label}</label>
      <input
        className="input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      ></input>
      <p className="hidden">{errorMessage}</p>
    </>
  );
}

export default FormInput;
