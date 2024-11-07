// import styled from "styled-components";

import { AlignCenter, CardContainer, Layout } from "../components/layout";
import NavBar from "../components/navbar";
import { TitleArea } from "../components/title";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";

const ProgressBar = ({ percent }) => {
  return (
    <CircularProgressBar
      colorCircle="var(--white)"
      colorSlice="var(--main-gradient)"
      fill="var(--white)"
      fontColor="var(--black)"
      percent={percent}
    ></CircularProgressBar>
  );
};

const MyPage = () => {
  return (
    <AlignCenter>
      <NavBar></NavBar>
      <Layout>
        <TitleArea title="My Page" subtitle="만드는 중" on={"true"}></TitleArea>
        <CardContainer>:(</CardContainer>
      </Layout>
    </AlignCenter>
  );
};

export default MyPage;
