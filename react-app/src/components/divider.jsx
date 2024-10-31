import React from "react";

const Divider = ({ dividerType }) => {
  let className = "divider";

  if (dividerType === "vertical") {
    className = "divider-vertical";
  } else if (dividerType === "horizontal") {
    className = "divider-horizontal";
  } else if (dividerType === "button") {
    className = "divider-button";
  }

  // console.log(className);
  return <div className={className}></div>;
};

export default Divider;
