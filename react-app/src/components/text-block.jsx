import React from "react";
import "../App.css";

const TextBlock = ({ textType, content }) => {
  let className = "text-block";

  if (textType === "title") {
    className = "text-title";
  } else if (textType === "content") {
    className = "text-content";
  } else if (textType === "detail") {
    className = "text-detail";
  } else if (textType === "small-detail") {
    className = "text-small-detail";
  } else if (textType === "selected-detail") {
    className = "text-selected-detail";
  }

  // console.log(className);
  return <div className={className}>{content}</div>;
};

export default TextBlock;
