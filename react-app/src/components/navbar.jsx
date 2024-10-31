import React from "react";
import TextBlock from "./text-block";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <TextBlock textType="detail" content="멤버"></TextBlock>
      <TextBlock textType="detail" content="내 프로필"></TextBlock>
      <TextBlock textType="detail" content="알림"></TextBlock>
    </div>
  );
};

export default NavBar;
