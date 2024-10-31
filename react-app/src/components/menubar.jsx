import React from "react";
import TextBlock from "./text-block";

const Menu = ({ content }) => {
  return <TextBlock textType={"detail"} content={content}></TextBlock>;
};

const MenuBar = ({ menu }) => {
  return (
    <div className="menubar">
      <Menu content={menu}></Menu>
    </div>
  );
};

export default MenuBar;
