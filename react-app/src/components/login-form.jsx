import React from "react";

const LoginForm = ({ formType }) => {
  let type = "";
  let placeholder = "";

  //   console.log(formType);
  if (formType === "pw") {
    placeholder = "Password";
    type = "password";
  } else {
    placeholder = "ID";
    type = "text";
  }
  return <input type={type} placeholder={placeholder} required />;
};

export default LoginForm;
