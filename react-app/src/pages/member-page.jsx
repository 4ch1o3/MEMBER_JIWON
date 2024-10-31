import React from "react";
import NavBar from "../components/navbar";
import TextBlock from "../components/text-block";
import Divider from "../components/divider";
import Button from "../components/button";
import Profile from "../components/profile";
// import ProfileContent from "../components/profile-content";
import MenuBar from "../components/menubar";

function MemberPage(props) {
  return (
    <div className="page">
      <NavBar></NavBar>
      <TextBlock
        textType={"title"}
        content={"누구에게 질문할까요?"}
      ></TextBlock>
      <Divider dividerType={"vertical"}></Divider>
      <MenuBar menu={"전체 보기"}></MenuBar>
      <Profile name="이름" bio="소개"></Profile>
    </div>
  );
}

export default MemberPage;

{
  /* <div className="main">
  <div className="App">
    <NavBar></NavBar>
    <TextBlock content="누구에게 질문할까요?"></TextBlock>
    <DividerVertical></DividerVertical>
  </div>
</div>; */
}
