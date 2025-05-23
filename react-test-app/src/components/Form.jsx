import DefaultContainer from "./DefaultContainer";
import FormInput from "./FormInput";
import React, { useState } from "react";

function Form() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    birthday: "",
    sex: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter username..",
      errorMessage:
        "Username needs to be 3-12 characters and should only include letters and numbers.",
      label: "Username",
      pattern: "^\\w{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter email..",
      errorMessage: "Invalid email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "Birthday",
      type: "date",
      errorMessage: "Users under 18 may not register.",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Enter password..",
      errorMessage:
        "Passwords should be 8-20 characters and include a number or a special character.",
      label: "Password",
      pattern: "^(?=.*\\w)(?=.*[\\d\\W]).{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password..",
      errorMessage: "Passwords do not match.",
      label: "Password",
      pattern: formValues.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefaults();
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <DefaultContainer>
      <form className="flex flex-col gap-2 w-64" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formValues[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="cursor-pointer">Submit</button>
      </form>
    </DefaultContainer>
  );
}

export default Form;
