import React from "react";

const Button = ({ buttonType, content, route }) => {
  let className = "button";

  if (buttonType === "text-only") {
    className = "text-button";
  }
  //   console.log(className);
  return <button className={className}>{content}</button>;
};

export default Button;
